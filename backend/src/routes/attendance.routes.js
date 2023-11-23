import { Router } from 'express'
import * as attCtrl from '../controllers/attendance.controller.js'
import { moveAttendancesToDailyCollection, getDailyAttendances } from '../controllers/dailyAttendance.controller.js'

const router = Router();

router.post('/asistencia', attCtrl.createAtt);
router.get('/getAsistencias', attCtrl.getAttendances);
router.post('/moveAttendancesToDailyCollection', moveAttendancesToDailyCollection);
router.get('/getDailyAttendaces/:date?', getDailyAttendances);
// router.get('/sse', sseEndpoint);

export default router;
