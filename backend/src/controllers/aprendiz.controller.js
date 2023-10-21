import Persona from '../models/personas.js';

export const getAprendices = async (req, res) => {
	try {
		const aprendices = await Persona.find();
		res.send(aprendices);
	} catch (error) {
		return res.status(500).json({
			message: 'Something goes wrong ❌....',
		});
	}
};

export const getAprendiz = async (req, res) => {
	try {
		const aprendiz = await Persona.findOne();
	} catch (error) {
		return res.status(500).json({
			message: 'Something goes wrong ❌',
		});
	}
};

// Todas las peticiones a la base de datos son asíncronas (async/await)
export const createAprendiz = async (req, res) => {
	try {
		const { nombre, apellido, cedula, correo, ficha, rol } = req.body;
		const newAprendiz = new Persona({
			nombre,
			apellido,
			cedula,
			correo,
			ficha,
			rol,
		});

		await newAprendiz.save();

		return res.json(newAprendiz);
	} catch (error) {
		return res.status(500).json({
			message: 'Something goes wrong ❌',
		});
	}
};

export const deleteAprendiz = async (req, res) => {
	try {
		const [result] = await pool.query(
			'DELETE FROM aprendiz WHERE user = ?',
			[req.body.user]
		);

		if (result.affectedRows <= 0) {
			return res.status(404).json({
				message: 'User not found 🔎',
			});
		}

		res.sendStatus(200);
	} catch (error) {
		return res.status(500).json({
			message: 'Something goes wrong ❌',
		});
	}
};

export const updateAprendiz = async (req, res) => {
	try {
		const aprendiz = await Persona.findByIdAndUpdate(req.params.id, req.body, {new})
	} catch (error) {
		return res.status(500).json({
			message: 'Something goes wrong ❌',
		});
	}
};
