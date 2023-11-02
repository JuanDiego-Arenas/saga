import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import attRouter from './routes/asistencia.routes.js';

const app = express();

app.use(cors());

app.use(morgan('dev'));
app.use(express.json());

app.use('/api', attRouter);

export default app;
