import { Router } from "express"
import { createNoticia, getNotices } from "../controllers/noticia.controller.js"

const router = Router()

router.post('/createNoticia', createNoticia)
router.get('/getNotices', getNotices)

export default router