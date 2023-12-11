import { z } from 'zod'

export const registerSchema = z.object({
    cc: z.string({
        required_error: 'Cedula es necesaria'
    }),
    email: z.string({
        required_error: 'Email es necesario'
    }).email({
        message: 'Email invalido'
    }),
    password: z.string({
        required_error: 'La Contraseña es necesaria'
    }).min(6, {
        message: 'La contraseña debe ser mínimo de 6 caracteres'
    })
})

export const loginSchema = z.object({
    cc: z.string({
        required_error: 'El usuario es necesario'
    }),
    password: z.string({
        required_error: 'Contraseña es requerida'
    }).min(6, {
        message: 'La contraseña mínimo 8 Caracteres'
    })
})