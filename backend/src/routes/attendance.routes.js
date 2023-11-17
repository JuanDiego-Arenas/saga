import { Router } from 'express'
import * as attCtrl from '../controllers/attendance.controller.js'
import { moveAttendancesToDailyCollection, getDailyAttendaces } from '../controllers/dailyAttendance.controller.js'

const router = Router();

router.post('/asistencia', attCtrl.createAtt);
router.get('/getAsistencias', attCtrl.getAttendances);
router.post('/moveAttendancesToDailyCollection', moveAttendancesToDailyCollection);
router.get('/getDailyAttendaces', getDailyAttendaces);

export default router;
