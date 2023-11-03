import { Router } from 'express';
import * as attCtrl from '../controllers/attendance.controller.js';

const router = Router();

router.post('/asistencia', attCtrl.createAtt);
router.get('/getAsistencias', attCtrl.getAttendances);

export default router;
