import { Router } from 'express';
import * as formacionCtrl from '../controllers/formacion.controller.js';

// Creo un router
const router = Router();

router.get('/formacion', formacionCtrl.getFormacion);

router.get('/formacion/:ficha', formacionCtrl.getFicha);

router.post('/formacion', formacionCtrl.createFormacion);

router.patch('/formacion', formacionCtrl.updateFormacion);

router.delete('/formacion', formacionCtrl.deleteFormacion);

export default router;
