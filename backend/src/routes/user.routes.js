import { Router } from 'express';
import { register } from '../controllers/auth.controller.js';
import * as user from '../controllers/user.controller.js';

// TODO Middlewares
import { authRequired } from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { accessRol } from '../middlewares/rol.validate.js';

// TODO Schemas
import { registerSchema } from '../schemas/auth.schema.js';

const router = Router();

// Rutas
router.post('/register', validateSchema(registerSchema), register);
router.get('/user/me', [authRequired, accessRol], user.getMe);
// router.get('/getUsers', [authRequired], user.getUsers);
router.patch('/user/:cedula', [authRequired, accessRol], user.updateUser);
router.delete('/user/:cedula', [authRequired, accessRol], user.deleteUser);

export default router;
