import { Router } from 'express'
import { registerProduct } from '../controllers/product.controller.js'

const api = Router()

api.post('/registerProduct', registerProduct)


export default api