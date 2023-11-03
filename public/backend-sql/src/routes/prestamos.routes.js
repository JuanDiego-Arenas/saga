import { Router } from 'express';
import * as prestamoCtrl from '../controllers/prestamos.controller.js';

// Creo un router
const router = Router();

router.get('/prestamos', prestamoCtrl.getPrestamo);

router.get('/prestamos/:codigo', prestamoCtrl.getUser);

router.post('/prestamos', prestamoCtrl.createPrestamo);

router.patch('/prestamos', prestamoCtrl.updatePrestamo);

router.delete('/prestamos', prestamoCtrl.deletePrestamo);

export default router;
