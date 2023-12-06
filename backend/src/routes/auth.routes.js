import { Router } from 'express';
import {
	login,
	logout,
	profile,
	verifyToken,
	getUserCc,
} from '../controllers/auth.controller.js';

// TODO Middlewares
import { authRequired } from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { accessRol } from '../middlewares/rol.validate.js';

// TODO Schemas
import { loginSchema } from '../schemas/auth.schema.js';

const router = Router();

router.post('/login', validateSchema(loginSchema), login);
router.post('/logout', [logout, accessRol]);
router.get('/getUser', getUserCc);

router.get('/verify', accessRol);

router.get('/profile', [authRequired, accessRol], profile);

export default router;
