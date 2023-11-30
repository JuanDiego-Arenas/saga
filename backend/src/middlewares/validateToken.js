import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export const authRequired = (req, res, next) => {
	const { token } = req.cookies;

	if (!token) return res.status(401).send({ msg: 'No token, authorization denied' });

	jwt.verify(token, TOKEN_SECRET, (err, user) => {
		if (err) return res.status(403).json({ msg: 'Invalid Token' });

		req.user = user;

		next();
	});
};

import ResetToken from '../models/resetToken.model.js';
export const verifyTokenPassword = async (req, res, next) => {
	const { tokenResetPassword } = req.params;

	try {
		const resetToken = await ResetToken.findOne({ token: tokenResetPassword });

		if (!resetToken || resetToken.expiresAt < Date.now()) {
			return res.status(401).json({ msg: 'Token inválido o expirado' });
		}

		next();
	} catch (error) {
		console.error(error);
		res.status(500).json({ msg: 'Error interno del servidor' });
	}
};
