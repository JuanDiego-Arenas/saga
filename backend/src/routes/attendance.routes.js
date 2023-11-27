import { Router } from 'express'
import * as attCtrl from '../controllers/attendance.controller.js'
import { moveAttendancesToDailyCollection, getDailyAttendances } from '../controllers/dailyAttendance.controller.js'
// <<<<<<< HEAD
// =======

// TODO Middlewares
import { authRequired } from '../middlewares/validateToken.js';

// >>>>>>> 9d32fae3d490dccb1d8f6ee49dc79936e2bcf895

const router = Router();

router.post('/asistencia', attCtrl.createAtt);
router.get('/getAsistencias', [authRequired], attCtrl.getAttendances);
router.post('/moveAttendancesToDailyCollection', moveAttendancesToDailyCollection);
// <<<<<<< HEAD
router.get('/getDailyAttendaces/:date?', getDailyAttendances);
// router.get('/sse', sseEndpoint);
// =======
router.get('/getDailyAttendances', getDailyAttendances);
// >>>>>>> 9d32fae3d490dccb1d8f6ee49dc79936e2bcf895

export default router;
