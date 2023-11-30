import { Router } from 'express';
import { getPassword, resetPassword } from '../controllers/resetPassword.controller.js';

// TODO Middlewares
import { verifyTokenPassword } from '../middlewares/validateToken.js';

const router = Router();

// Rutas
router.get('/password_reset/:tokenResetPassword', verifyTokenPassword, getPassword);
router.patch('/password_reset/:tokenResetPassword', verifyTokenPassword, resetPassword);

export default router;
