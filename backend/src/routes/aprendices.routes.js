import { Router } from 'express';
import * as aprendizCtrl from '../controllers/aprendiz.controller.js';

// Creo un router
const router = Router();

// router.get('/aprendiz', (req, res) => res.send('Hello World'));
router.get('/aprendiz', aprendizCtrl.getAprendices);

router.get('/aprendiz/:id', aprendizCtrl.getAprendiz);

router.post('/aprendiz', aprendizCtrl.createAprendiz);

router.patch('/aprendiz/:id', aprendizCtrl.updateAprendiz);

router.delete('/aprendiz', aprendizCtrl.deleteAprendiz);

export default router;
