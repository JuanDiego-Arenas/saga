import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// TODO >>>>>>>> Use's
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(fileUpload());
app.use(
	cors({
		origin: 'http://localhost:5173',
		credentials: true,
	})
);
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// TODO >>>>>>>> Here all Routes
import authRoutes from './routes/auth.routes.js';
import fileExcelRoutes from './routes/fileExcel.routes.js';
import noticiasRoutes from './routes/noticia.routes.js';
import userRouter from './routes/user.routes.js';
import attRouter from './routes/attendance.routes.js';
import forgotPasswordRouter from './routes/forgotPassword.routes.js';
import resetPasswordRouter from './routes/resetPassword.routes.js';

// TODO >>>>>>>> Routes Use's
app.use('/api', authRoutes);
app.use('/api', fileExcelRoutes);
app.use('/api', noticiasRoutes);
app.use('/api', userRouter);
app.use('/api', attRouter);
app.use('/api', forgotPasswordRouter);
app.use('/api', resetPasswordRouter);

app.use((req, res, next) => {
	res.status(404).json({
		message: 'EndPoint No Encontrado 😴',
	});
});

export default app;
