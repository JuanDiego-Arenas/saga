import { Router } from 'express';
import { register, login, logout, getUsers, profile, verifyToken, getUserCc } from '../controllers/auth.controller.js'


// TODO Middlewares
import { authRequired } from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validator.middleware.js'


// TODO Schemas
import { registerSchema, loginSchema } from '../schemas/auth.schema.js'


const router = Router()

router.post('/register', validateSchema(registerSchema) ,register)
router.post('/login', validateSchema(loginSchema), login)
router.post('/logout', logout)
router.get('/getUsers', getUsers)
router.get('/getUser', getUserCc)

router.get('/verify', verifyToken)

router.get('/profile', authRequired, profile)

export default router