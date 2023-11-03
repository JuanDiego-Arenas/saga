import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
	cedula: {
		type: String,
		requires: true,
		trim: true,
	},
	user_name: {
		type: String,
		requires: true,
		trim: true,
	},
	entrada: Date,
	salida: Date,
});

export default mongoose.model('Attendance', attendanceSchema);
