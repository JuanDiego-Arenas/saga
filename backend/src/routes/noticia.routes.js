import { Router } from "express"
import { createNoticia } from "../controllers/noticia.controller.js"

const router = Router()

router.post('/createNoticia', createNoticia)

export default router