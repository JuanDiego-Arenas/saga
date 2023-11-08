import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const attendanceSchema = new Schema({
	tipo: {
		type: String,
		required: true,
	},
	cedula: {
		type: String,
		required: true,
	},
	user_name: {
		type: String,
		required: true,
	},
	ficha: {
		type: String
	},
	entrada: {
		type: Date,
		default: null,
	},
	salida: {
		type: Date,
		default: null,
	},
	ultimaAccion: {
		type: Date,
		default: null,
	},
});

const Attendance = model('Attendance', attendanceSchema);

export default Attendance;
