import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		tipo: {
			type: String,
			required: true,
		},
		cc: {
			type: String,
			unique: true,
			trim: true,
			required: true,
		},
		username: {
			type: String,
			required: true,
			trim: true,
		},
		telefono: {
			type: String,
			default: '0',
		},
		email: {
			type: String,
			required: true,
			trim: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		rol: {
			type: String,
		},
		avatar: String,
		fichaNumero: String,
		fichaNombre: String,
		estado: String,
	},
	{
		timestamps: true,
	}
);

export default mongoose.model('User', userSchema);
