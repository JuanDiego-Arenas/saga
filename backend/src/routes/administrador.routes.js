import { Router } from 'express';
// import * as adminCtrl from '../controllers/administrador.controller.js';

// Creo un router
const router = Router();

router.get('/admin', adminCtrl.getAdmin);

router.get('/admin/:user', adminCtrl.getUser);

router.post('/admin', adminCtrl.createAdmin);

router.patch('/admin', adminCtrl.updateAdmin);

router.delete('/admin', adminCtrl.deleteAdmin);

export default router;
