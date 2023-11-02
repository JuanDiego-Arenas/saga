import Attendance from '../models/attendance.model.js';
import User from '../models/user.model.js';

// Controlador para registrar entrada o salida
export const createAtt = async (req, res) => {
	const { id_user } = req.body;

	try {
		// Busca el registro de asistencia del usuario
		let asistencia = await Attendance.findOne({ id_user })
			.sort({ entrada: -1 })
			.exec();

		const user_name = await User.findOne(
			{ cc: id_user },
			{ _id: 0, username: 1 }
		);

		if (!asistencia) {
			// Si no existe un registro de asistencia, crea uno nuevo
			if (user_name) {
				asistencia = new Attendance({
					id_user,
					user_name: user_name.username,
				});
			} else {
				res.status(404).send({
					message: 'Usuario no encontrado.',
				});
				return;
			}
		}

		const now = new Date(
			new Date().getTime() - new Date().getTimezoneOffset() * 60000
		);

		// Verifica si ya hay una entrada para el día
		if (!asistencia.entrada) {
			// Si no hay entrada, agrega una
			asistencia.entrada = now;
		} else if (!asistencia.salida) {
			// Si hay una entrada pero no una salida, agrega una salida
			asistencia.salida = now;
		} else {
			// Si ya hay una entrada y salida, crea un nuevo registro de asistencia
			asistencia = new Attendance({
				id_user,
				user_name: user_name.username,
				entrada: now,
			});
		}
		await asistencia.save();

		console.log(asistencia);

		res.status(200).send({ message: 'Registro exitoso.' });
	} catch (error) {
		console.error(error);
		res.status(500).send({ message: 'Error en el registro de asistencia.' });
	}
};


export const getAttendances = async (req, res) => {
	try {
		const attendances = await Attendance.find();
		res.status(200).send(attendances);
	} catch (error) {
		console.error(error);
		res.status(500).send({ message: 'Error al obtener las asistencias.' });
	}
};