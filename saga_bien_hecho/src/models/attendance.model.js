import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
	id_user: {
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
