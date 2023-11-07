import Attendance from '../models/attendance.model.js';
import User from '../models/user.model.js';
import { DateTime } from 'luxon';

export const createAtt = async (req, res) => {
	const { cedula } = req.body;

	try {
		let asistencia = await Attendance.findOne({ cedula }).sort({ entrada: -1 }).exec();
		const user_name = await User.findOne(
			{ cc: cedula },
			{ _id: 0, username: 1, fichaNumero: 1, tipo: 1 }
		);

		const now = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000);

		if (!asistencia) {
			if (user_name) {
				asistencia = new Attendance({
					tipo: user_name.tipo,
					cedula,
					user_name: user_name.username,
					ficha: user_name.fichaNumero,
					ultimaAccion: now,
				});
			} else {
				res.status(404).send({
					message: 'Usuario no encontrado.',
				});
				return;
			}
		} else {
			asistencia.salida = now;
			asistencia.ultimaAccion = now;
		}

		await asistencia.save();
		res.status(200).send({ message: 'Registro exitoso.' });
	} catch (error) {
		console.error(error);
		res.status(500).send({ message: 'Error en el registro de asistencia.' });
	}
};

export const getAttendances = async (req, res) => {
	try {
		const attendances = await Attendance.find({}, 'tipo cedula user_name ficha entrada salida ultimaAccion')
			.sort({ ultimaAccion: -1 });

		const formattedAttendances = attendances.map(attendance => {
			return {
				...attendance._doc,
				entrada: attendance.entrada ? DateTime.fromJSDate(attendance.entrada).toLocaleString(DateTime.DATETIME_SHORT) : null,
				salida: attendance.salida ? DateTime.fromJSDate(attendance.salida).toLocaleString(DateTime.DATETIME_SHORT) : null,
			};
		});

		res.status(200).send(formattedAttendances);
	} catch (error) {
		console.error(error);
		res.status(500).send({ message: 'Error al obtener las asistencias.' });
	}
};
