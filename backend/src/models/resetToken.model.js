import mongoose from 'mongoose';

const resetTokenModel = mongoose.Schema({
	idUser: {
		type: String,
		require: true,
		unique: true,
		trim: true,
	},
	token: {
		type: String,
		require: true,
		unique: true,
		trim: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	expiresAt: {
		type: Date,
		default: Date.now() + 1 * 60 * 60 * 1000,
	},
});

export default mongoose.model('ResetToken', resetTokenModel);
