import express from 'express';
import aprendicesRoutes from './routes/aprendices.routes.js';

const app = express();

app.use(express.json());
app.use('/api', aprendicesRoutes);

export default app;
