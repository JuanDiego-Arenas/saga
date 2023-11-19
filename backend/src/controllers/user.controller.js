import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';

export const getMe = async (req, res) => {
	const { id } = req.user;
	const response = await User.findById(id);

	if (!response) {
		res.status(400).send({ msg: 'User not found 🔎' });
	} else {
		res.status(200).send(response);
	}
};

export const getUsers = async (req, res) => {
	const data = await User.find();

	res.status(200).json({ data });
};

export const updateUser = async (req, res) => {
	const { cedula } = req.params;
	const userData = req.body;

	try {
		// Password
		if (userData.password) {
			const salt = bcrypt.genSaltSync(10);
			const hashPassword = bcrypt.hashSync(userData.password, salt);
			userData.password = hashPassword;
		} else {
			delete userData.password;
		}

		// Avatar

		const updatedUser = await User.findOneAndUpdate({ cc: cedula }, userData, {
			new: true,
		});

		if (!updatedUser) {
			return res
				.status(400)
				.send({ msg: 'Error al actualizar (╯°□°）╯︵ ┻━┻' });
		}

		return res.status(200).send({ msg: 'Datos actualizados (～￣▽￣)～' });
	} catch (error) {
		return res.status(500).json({ msg: error.message });
	}
};

export const deleteUser = async (req, res) => {
	const { cedula } = req.params;

	try {
		const deletedUser = await User.findOneAndDelete({ cc: cedula });

		if (!deletedUser) {
			res.status(404).send({ msg: 'User not fount (╯°□°）╯︵ ┻━┻' });
		} else {
			res.status(200).send({ msg: 'Usuario Eliminado (●^◡^●)' });
		}
	} catch (error) {
		return res.status(500).json({ msg: error.message });
	}
};
