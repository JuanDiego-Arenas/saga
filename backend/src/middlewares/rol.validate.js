import User from '../models/user.model.js';

export const accessRol = async (req, res, next) => {
	const { id } = req.user;

	try {
		const { rol: userRole } = await User.findOne(
			{ _id: id },
			{ _id: 0, rol: 1 }
		);
		const roles = ['admin', 'instructor', 'aprendiz', 'porteria', 'Bienestar Al aprendiz', 'invitado'];

		if (roles.includes(userRole)) {
			return next();
		} else {
			return res.status(401).send({ msg: 'Acceso denegado' });
		}
	} catch (error) {
		return res.status(500).send({ msg: 'Error al validar el rol' });
	}
};
