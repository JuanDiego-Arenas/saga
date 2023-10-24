import User from '../models/user.model.js';
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../libs/jwt.js';
// import {  } from '../libs/jwt.js'

export const register = async (req, res) => {
    let { cc, username, email, password, rol  } = req.body

    try {
        const ccFound = await User.findOne({ cc })
        const userFound = await User.findOne({ email });
        if(ccFound) return res.status(202).json({ msg: 'Cedula en uso'})
        if(userFound) return res.status(201).json({ msg: 'Email en uso' })

        const passwordHash = await bcrypt.hash(password, 10)

        rol === undefined ? rol = 'invitado' : rol = rol

        const newUser = new User({
            cc,
            username,
            email,
            password: passwordHash,
            rol
        })

        const userSaved = await newUser.save()

        const token = await createAccessToken({
            id: userSaved._id,
        })

        res.cookie('token', token)

        res.json({
            id: userSaved._id,
            cc: userSaved.cc,
            username: userSaved.username,
            email: userSaved.email,
            password: userSaved.password,
            rol: userSaved.rol,
        })

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }

}

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

