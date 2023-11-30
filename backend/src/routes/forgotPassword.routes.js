import { Router } from 'express';
import { forgotPassword } from '../controllers/forgotPasswordController.js';

const router = Router();

// Rutas
router.post('/forgot_password', forgotPassword);

export default router;
