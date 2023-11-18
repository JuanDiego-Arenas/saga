import Attendance from '../models/attendance.model.js';
import DailyAttendance from '../models/dailyReport.model.js';
import { DateTime } from 'luxon';

export const moveAttendancesToDailyCollection = async (req, res) => {
    try {
        // Obtener la fecha actual y definir el rango de tiempo del día actual
        const now = DateTime.local();
        const startOfDay = now.startOf('day').toJSDate();
        const endOfDay = now.endOf('day').toJSDate();

        // Obtener las asistencias del día actual
        const attendances = await Attendance.find();

        // Mapear las asistencias de Attendance para almacenar toda la información
        const attendancesWithDetails = attendances.map(attendance => attendance.toObject());

        // Crear un documento para la colección de asistencias diarias
        const dailyAttendance = new DailyAttendance({
            date: now.toJSDate(),
            attendances: attendancesWithDetails,
        });

        // Guardar el documento en la colección de asistencias diarias
        await dailyAttendance.save();

        // Eliminar las asistencias del día actual de la colección de asistencias regulares
        await Attendance.deleteMany();

        res.status(200).send({ dailyAttendance });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error al mover las asistencias.' });
    }
};


export const getDailyAttendances = async (req, res) => {
    const data = await DailyAttendance.find().populate('attendances') // Utiliza populate para obtener la información completa de las asistencias
    .exec();
    res.status(200).json({ msg: data })
}
