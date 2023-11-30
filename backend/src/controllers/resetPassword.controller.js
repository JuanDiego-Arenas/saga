import User from '../models/user.model.js';
import ResetToken from '../models/resetToken.model.js';
import bcrypt from 'bcryptjs';

export const getPassword = (req, res) => {
	res.sendStatus(200);
};

export const resetPassword = async (req, res) => {
	const { tokenResetPassword } = req.params;
	const passwordData = req.body;

	const token = await ResetToken.findOne({ token: tokenResetPassword });

	let regExPassword =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.-_@$!%*?&#])[A-Za-z\d.-_@$!%*?&#]{8,16}$/;

	if (!regExPassword.test(passwordData.password)) {
		res.status(400).json({
			msg: 'La contraseña debe de tener entre 8 y 16 caracteres, 1 numero, 1 minúscula, 1 mayúscula y 1 carácter especial',
		});
		return;
	}

	try {
		const salt = bcrypt.genSaltSync(10);
		const hashPassword = bcrypt.hashSync(passwordData.password, salt);
		passwordData.password = hashPassword;

		const updatedUser = await User.findOneAndUpdate({ _id: token.idUser }, passwordData, {
			new: true,
		});

		if (!updatedUser) {
			return res.status(400).send({ msg: 'Error al actualizar (╯°□°）╯︵ ┻━┻' });
		}

		await ResetToken.findOneAndDelete({ token: token.token });
		return res.status(200).send({ msg: 'Datos actualizados (～￣▽￣)～' });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ msg: error.message });
	}
};
