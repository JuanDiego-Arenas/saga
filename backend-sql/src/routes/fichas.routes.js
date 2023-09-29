import { Router } from 'express';
import * as fichasCtrl from '../controllers/fichas.controller.js';

// Creo un router
const router = Router();

router.get('/fichas', fichasCtrl.getFichas);

router.get('/fichas/:ficha', fichasCtrl.getFicha);

router.post('/fichas', fichasCtrl.createFichas);

router.patch('/fichas', fichasCtrl.updateFichas);

router.delete('/fichas', fichasCtrl.deleteFichas);

export default router;
