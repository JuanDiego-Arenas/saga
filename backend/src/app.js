import express from 'express';
import aprendizRoutes from './routes/aprendiz.routes.js';
import instructorRoutes from './routes/instructor.routes.js';
import formacionRoutes from './routes/formacion.routes.js';
import adminRoutes from './routes/administrador.routes.js';
import fichaRoutes from './routes/fichas.routes.js';
import prestamosRoutes from './routes/prestamos.routes.js';
import indexRoutes from './routes/index.routes.js';

// Iniciamos la aplicación con express
const app = express();

app.use(express.json());

// Usamos el router de aprendiz, para añadir todas sus rutas
app.use(indexRoutes);
app.use('/api', aprendizRoutes);
app.use('/api', instructorRoutes);
app.use('/api', adminRoutes);
app.use('/api', formacionRoutes);
app.use('/api', fichaRoutes);
app.use('/api', prestamosRoutes);

app.use((req, res, next) => {
	res.status(404).json({
		message: 'Endpoint not found',
	});
});

export default app;
