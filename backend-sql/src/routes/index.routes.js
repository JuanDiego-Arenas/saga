import { Router } from 'express';
import { ping } from '../controllers/index.controller.js';

const router = Router();

// Método Get, que devuelve una promesa, por medio de la query sql
// La respuesta, es un arreglo, pero al enviarlo con [0] devuelve el primer parámetro del arreglo
router.get('/ping', ping);

export default router;
