import mongoose from 'mongoose';

const personaSchema = new mongoose.Schema({
	nombre: {
		type: String,
		require: true,
		trim: true,
	},
	apellido: {
		type: String,
		require: true,
		trim: true,
	},
	cedula: {
		type: String,
		require: true,
		trim: true,
	},
	correo: {
		type: String,
		require: true,
		trim: true,
	},
	ficha: {
		type: String,
		trim: true,
	},
	rol: {
		type: String,
		require: true,
		trim: true,
	},
});

export default mongoose.model('Persona', personaSchema);
