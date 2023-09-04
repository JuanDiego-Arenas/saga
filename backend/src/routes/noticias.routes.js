import { Router } from 'express';
import * as noticiasCtrl from '../controllers/noticias.controller.js';

// Creo un router
const router = Router();

router.get('/noticia', noticiasCtrl.getNoticias);

router.get('/noticia/:noticia_id', noticiasCtrl.getNoticia);

router.post('/noticia', noticiasCtrl.createNoticia);

router.patch('/noticia', noticiasCtrl.updateNoticia);

router.delete('/noticia', noticiasCtrl.deleteNoticia);

export default router;
