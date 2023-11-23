import { Router } from 'express';
import {
	createNoticia,
	getNotices,
	updateNews,
	deleteNews,
} from '../controllers/noticia.controller.js';

// TODO Middlewares
import { authRequired } from '../middlewares/validateToken.js';
import { accessRol } from '../middlewares/rol.validate.js';

const router = Router();

router.post('/createNoticia', createNoticia);
router.get('/getNotices', getNotices);
router.patch('/news/:id', [authRequired, accessRol], updateNews);
router.delete('/news/:id', [authRequired, accessRol], deleteNews);

export default router;
