import { Router } from 'express'
// controller
import { CargarXml, nada } from '../controllers/file.controller.js';

// TODO Middlewares
// import { authRequired } from '../middlewares/validateToken.js';
// import { validateSchema } from '../middlewares/validator.middleware.js'


// TODO Schemas

const router = Router()

router.post('/file', CargarXml)

export default router