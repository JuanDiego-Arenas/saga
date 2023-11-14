import User from '../models/user.model.js';

export const accessRol = async (req, res, next) => {
	const { id } = req.user;

	const rol = await User.findOne({ _id: id }, { _id: 0, rol: 1 });

	if (!rol.rol == 'aprendiz') {
		res.status(200).send({ msg: 'Es aprendiz' });
	} else {
		return res.status(200).send({ msg: 'No es aprendiz' });
	}

	jwt.verify(token, TOKEN_SECRET, (err, user) => {
		if (err) return res.status(403).json({ msg: 'Invalid Token' });

		req.user = user;

		next();
	});
};
