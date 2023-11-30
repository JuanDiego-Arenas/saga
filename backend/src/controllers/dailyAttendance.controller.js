import Attendance from '../models/attendance.model.js';
import DailyAttendance from '../models/dailyReport.model.js';
import { DateTime } from 'luxon';

export const moveAttendancesToDailyCollection = async (req, res) => {
    try {
        // Obtener la fecha actual y definir el rango de tiempo del día actual
        const now = DateTime.local();
        const startOfDay = now.startOf('day').toJSDate();
        const endOfDay = now.endOf('day').toJSDate();

        // Verificar si ya existe un registro para la fecha actual en la colección DailyAttendance
        const existingRecord = await DailyAttendance.findOne({ date: { $gte: startOfDay, $lt: endOfDay } });

        if (existingRecord) {
            // Si ya existe un registro, actualiza las asistencias en lugar de crear uno nuevo
            return res.status(401).json({ msg: 'Registro Ya Creado Hoy' })
        } else {
            // Si no existe un registro, crea uno nuevo
            const attendances = await Attendance.find();
            const attendancesWithDetails = attendances.map(attendance => attendance.toObject());

            // Crear un documento para la colección de asistencias diarias
            const dailyAttendance = new DailyAttendance({
                date: now.toJSDate(),
                attendances: attendancesWithDetails,
            });

            // Guardar el documento en la colección de asistencias diarias
            await dailyAttendance.save();
        }

        // Eliminar las asistencias del día actual de la colección de asistencias regulares
        await Attendance.deleteMany();

        res.status(200).send({ message: 'Operación exitosa.' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error al mover las asistencias.' });
    }
};

// import { DateTime } from 'luxon';

export const getDailyAttendance = async (req, res) => {
    try {
        // Obtener la fecha del parámetro o usar la fecha actual si no se proporciona
        const requestedDate = req.params.date ? DateTime.fromISO(req.params.date) : DateTime.local();

        // Definir el rango de tiempo del día seleccionado
        const startOfDay = requestedDate.startOf('day').toJSDate();
        const endOfDay = requestedDate.endOf('day').toJSDate();

        // Obtener las asistencias del día seleccionado
        const attendances = await DailyAttendance.find({
            date: { $gte: startOfDay, $lt: endOfDay },
        });

        // Formatear las fechas y asegurarse de que otros datos estén presentes
        const formattedAttendances = attendances.map((attendance) => {
            const formattedEntries = attendance.attendances.map((entry) => ({
                tipo: entry.tipo,
                cedula: entry.cedula,
                user_name: entry.user_name,
                ficha: entry.ficha,
                entrada: entry.entrada ? DateTime.fromJSDate(entry.entrada).toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS) : null,
                salida: entry.salida ? DateTime.fromJSDate(entry.salida).toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS) : null,
            }));

            return {
                ...attendance._doc,
                attendances: formattedEntries,
            };
        });

        res.status(200).json({ msg: formattedAttendances });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener las asistencias diarias.' });
    }
};


export const getDailyAttendances = async (req, res) => {
    const data = await DailyAttendance.find().populate('attendances') // Utiliza populate para obtener la información completa de las asistencias
    .exec();
    res.status(200).json({ msg: data })
}