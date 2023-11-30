import { Router } from 'express'
import * as attCtrl from '../controllers/attendance.controller.js'
import { moveAttendancesToDailyCollection, getDailyAttendances, getDailyAttendance } from '../controllers/dailyAttendance.controller.js'

// TODO Middlewares
import { authRequired } from '../middlewares/validateToken.js';


const router = Router();

router.post('/asistencia', attCtrl.createAtt);
router.get('/getAsistencias', [authRequired], attCtrl.getAttendances);
router.post('/moveAttendancesToDailyCollection', moveAttendancesToDailyCollection);
router.get('/getDailyAttendace', getDailyAttendances);
router.get('/getDailyAttendaces/:date?', getDailyAttendance);
// router.get('/sse', sseEndpoint);

export default router;
