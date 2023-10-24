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
        message: 'La contraseña debe ser minimo de 6 caracteres'
    })
})

export const loginSchema = z.object({
    email: z.string({
        required_error: 'Email is required'
    }).email({
        message: 'Invalid email'
    }),
    password: z.string({
        required_error: 'Password is required'
    }).min(6, {
        message: 'Password must be at least 6 characters'
    })
})