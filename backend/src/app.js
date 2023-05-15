import express from 'express';
import morgan from 'morgan';
import aprendizRoutes from './routes/aprendiz.routes.js';
import indexRoutes from './routes/index.routes.js';

// Iniciamos la aplicación con express
const app = express();

app.use(morgan('dev'))

app.use(express.json());

// Usamos el router de aprendiz, para añadir todas sus rutas
app.use(indexRoutes);
app.use('/api', aprendizRoutes);

app.use((req, res, next) => {
	res.status(404).json({
		message: 'Endpoint not found',
	});
});

export default app;
