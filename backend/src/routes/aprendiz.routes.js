import { Router } from 'express';
import * as aprendizCtrl from '../controllers/aprendiz.controller.js';

// Creo un router
const router = Router();

router.get('/aprendiz', aprendizCtrl.getAprendiz);

router.get('/aprendiz/:user', aprendizCtrl.getUser);

router.post('/aprendiz', aprendizCtrl.createAprendiz);

router.patch('/aprendiz', aprendizCtrl.updateAprendiz);

router.delete('/aprendiz', aprendizCtrl.deleteAprendiz);

export default router;
