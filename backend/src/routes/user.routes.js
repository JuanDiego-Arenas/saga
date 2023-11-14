import { Router } from 'express';
import * as user from '../controllers/user.controller.js';

// TODO Middlewares
import { authRequired } from '../middlewares/validateToken.js';
import { accessRol } from '../middlewares/rol.validate.js'

const router = Router();

// Rutas
router.get('/user/me', [authRequired, accessRol], user.getMe);
// router.get('/getUsers', [authRequired], user.getUsers);
router.patch('/user', [authRequired], user.updateUser);

export default router;
