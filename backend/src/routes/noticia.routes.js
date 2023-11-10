import { Router } from "express"
import { createNoticia, getNotices, updateNotices, deleteNotices } from "../controllers/noticia.controller.js"

const router = Router()

router.post('/createNoticia', createNoticia)
router.get('/getNotices', getNotices)
router.get('/updateNotice', updateNotices)
router.get('/deleteNotice', deleteNotices)

export default router