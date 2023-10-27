import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { createAccessToken } from '../libs/jwt.js';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

export const register = async (req, res) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const { cc, username, email, password, rol, tipo } = req.body;
    const avatar = req.files ? req.files.avatar : null; // Obtén el archivo de la solicitud

    try {
        const ccFound = await User.findOne({ cc });
        const userFound = await User.findOne({ email });
        if (ccFound) return res.status(202).json({ msg: 'Cedula en uso' });
        if (userFound) return res.status(201).json({ msg: 'Email en uso' });

        const passwordHash = await bcrypt.hash(password, 10);

        // Construir la ruta al directorio de imágenes fuera de la carpeta controllers
        const imagesDirectory = path.resolve(__dirname, '..', 'uploads', 'avatars');

        // Verificar si el directorio existe, si no, crearlo
        if (!fs.existsSync(imagesDirectory)) {
            fs.mkdirSync(imagesDirectory, { recursive: true });
        }

        // Crear un nuevo usuario con los datos proporcionados
        const newUser = new User({
            tipo,
            cc,
            username,
            email,
            password: passwordHash,
            rol,
            avatar: avatar ? `/avatars/${Date.now()}-${avatar.name}` : 'userdefault.jpg'
        });

        // Si se proporciona una imagen, guárdala en el servidor y establece la ruta en el modelo de usuario
        if (avatar) {
            // Mueve el archivo al directorio de imágenes
            avatar.mv(path.join(imagesDirectory, `${Date.now()}-${avatar.name}`), (err) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ msg: 'Error al subir la imagen' });
                }

                // Guarda el usuario en la base de datos y responde al cliente...
                newUser.save().then((userSaved) => {
                    // Crea un token de acceso para el usuario
                    const token = createAccessToken({ id: userSaved._id });

                    // Devuelve la respuesta con el usuario creado y el token
                    res.status(200).json({
                        user: {
                            id: userSaved._id,
                            tipo: userSaved.tipo,
                            cc: userSaved.cc,
                            username: userSaved.username,
                            email: userSaved.email,
                            rol: userSaved.rol,
                            avatar: userSaved.avatar
                        },
                        token: token
                    });
                }).catch((error) => {
                    res.status(500).json({ msg: error.message });
                });
            });
        } else {
            // Si no se proporciona una imagen, establece la ruta de la imagen predeterminada y guarda el usuario
            newUser.save().then((userSaved) => {
                // Crea un token de acceso para el usuario
                const token = createAccessToken({ id: userSaved._id });

                // Devuelve la respuesta con el usuario creado y el token
                res.status(200).json({
                    user: {
                        id: userSaved._id,
                        tipo: userSaved.tipo,
                        cc: userSaved.cc,
                        username: userSaved.username,
                        email: userSaved.email,
                        rol: userSaved.rol,
                        avatar: userSaved.avatar
                    },
                    token: token
                });
            }).catch((error) => {
                res.status(500).json({ msg: error.message });
            });
        }
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};


export const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const userFound = await User.findOne({ email })
        if(!userFound) return res.status(404).json({ msg: 'Email no encontrado' })

        const isMatch = await bcrypt.compare(password, userFound.password)
        if(!isMatch) return res.status(400).json({ msg: 'Contraseña Incorrecta' })

        const token = await createAccessToken({ id: userFound._id })

        res.cookie('token', token)

        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email
        })

    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }

}

export const logout = (req, res) => {
    res.cookie('token', '', {
        expires: new Date(0)
    })
    return res.status(200).json({ msg: 'Logout' })
}

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id)
    if(!userFound) return res.status(404).json({ msg: 'User Not Found' })

    return res.status(200).json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updateAt: userFound.updatedAt
    })

}

