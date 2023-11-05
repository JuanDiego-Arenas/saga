import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
	cedula: {
		type: String,
		require: true,
		trim: true,
	},
	user_name: {
		type: String,
		require: true,
		trim: true,
	},
	ficha: {
		type: String,
		require: true,
		trim: true,
	},
	entrada: Date,
	salida: Date,
});

export default mongoose.model('Attendance', attendanceSchema);
