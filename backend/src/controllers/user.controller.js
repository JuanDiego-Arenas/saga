import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
// import image from '../utils/image.js';

export const getMe = async (req, res) => {
	const { id } = req.user;
	const response = await User.findById(id);

	if (!response) {
		res.status(400).send({ msg: 'User not found 🔎' });
	} else {
		res.status(200).send(response);
	}
};

export const getUsers = async (req, res) => {
	const data = await User.find();

	res.status(200).json({ data });
};

export const updateUser = async (req, res) => {
	const { cc } = req.params;
	const userData = req.body;
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);
	const avatar = req.files ? req.files.avatar : null; // Obtén el archivo de la solicitud

	// Password
	if (userData.password) {
		const salt = bcrypt.genSaltSync(10);
		const hashPassword = bcrypt.hashSync(userData.password, salt);
		userData.password = hashPassword;
	} else {
		delete userData.password;
	}

	// Construir la ruta al directorio de imágenes fuera de la carpeta controllers
	const imagesDirectory = path.resolve(__dirname, '..', 'uploads', 'avatars');

	// Avatar
	if (userData.avatar == 'userDefault.jpg') {
	} else {
	}
};
