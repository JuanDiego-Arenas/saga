import { Router } from 'express';
import * as attCtrl from '../controllers/attendance.controller.js';

// TODO Middlewares
import { authRequired } from '../middlewares/validateToken.js';


const router = Router();

router.post('/asistencia', [authRequired], attCtrl.createAtt);
router.get('/getAsistencias', [authRequired], attCtrl.getAttendances);

export default router;
