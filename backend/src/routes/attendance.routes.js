import { Router } from 'express'
import * as attCtrl from '../controllers/attendance.controller.js'
import { moveAttendancesToDailyCollection, getDailyAttendances } from '../controllers/dailyAttendance.controller.js'
<<<<<<< HEAD
=======
// <<<<<<< HEAD
// =======
>>>>>>> 6d5aefa6384c7b7ecb0cae66e0f8491521211009

// TODO Middlewares
import { authRequired } from '../middlewares/validateToken.js';

<<<<<<< HEAD
=======
// >>>>>>> 9d32fae3d490dccb1d8f6ee49dc79936e2bcf895
>>>>>>> 6d5aefa6384c7b7ecb0cae66e0f8491521211009

const router = Router();

router.post('/asistencia', attCtrl.createAtt);
router.get('/getAsistencias', [authRequired], attCtrl.getAttendances);
router.post('/moveAttendancesToDailyCollection', moveAttendancesToDailyCollection);
<<<<<<< HEAD
router.get('/getDailyAttendaces/:date?', getDailyAttendances);
// router.get('/sse', sseEndpoint);
=======
// <<<<<<< HEAD
router.get('/getDailyAttendaces/:date?', getDailyAttendances);
// router.get('/sse', sseEndpoint);
// =======
router.get('/getDailyAttendances', getDailyAttendances);
// >>>>>>> 9d32fae3d490dccb1d8f6ee49dc79936e2bcf895
>>>>>>> 6d5aefa6384c7b7ecb0cae66e0f8491521211009

export default router;
