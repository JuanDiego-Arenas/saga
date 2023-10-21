import { Router } from 'express';
// import * as instructorCtrl from '../controllers/instructor.controller.js';

// Creo un router
const router = Router();

router.get('/instructor', instructorCtrl.getInstructor);

router.get('/instructor/:user', instructorCtrl.getUser);

router.post('/instructor', instructorCtrl.createInstructor);

router.patch('/instructor', instructorCtrl.updateInstructor);

router.delete('/instructor', instructorCtrl.deleteInstructor);

export default router;
