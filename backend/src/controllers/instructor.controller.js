import { pool } from '../db.js';

export const getInstructor = async (req, res) => {
	try {
		const [rows] = await pool.query('SELECT * FROM instructor');
		res.json(rows);
	} catch (error) {
		return res.status(500).json({
			message: 'Something goes wrong ❌',
		});
	}
};

export const getUser = async (req, res) => {
	try {
		const [rows] = await pool.query(
			'SELECT * FROM instructor WHERE user = ?',
			[req.params.user]
		);

		if (rows.length <= 0) {
			return res.status(404).json({
				message: 'instructor not found 🔎',
			});
		}
		res.json(rows[0]);
	} catch (error) {
		return res.status(500).json({
			message: 'Something goes wrong ❌',
		});
	}
};

// Todas las peticiones a la base de datos son asíncronas (async/await)
export const createInstructor = async (req, res) => {
	try {
		const {
			user,
			password,
			cedula,
			nombre,
			apellido,
			correo,
			celular,
			ficha_id,
			pre_id,
		} = req.body;

		const [rows] = await pool.query(
			// Los valores van "?", para después ser recibidos desde el body
			'INSERT INTO instructor (user, password, cedula, nombre, apellido, correo, celular, ficha_id, pre_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
			[
				user,
				password,
				cedula,
				nombre,
				apellido,
				correo,
				celular,
				ficha_id,
				pre_id,
			]
		);

		res.send({
			id: rows.insertId,
			user,
			password,
			nombre,
		});
	} catch (error) {
		return res.status(500).json({
			message: 'Something goes wrong ❌',
		});
	}
};

export const deleteInstructor = async (req, res) => {
	try {
		const [result] = await pool.query(
			'DELETE FROM instructor WHERE user = ?',
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

export const updateInstructor = async (req, res) => {
	try {
		const {
			cedula,
			user,
			password,
			nombre,
			apellido,
			correo,
			celular,
			ficha_id,
			pre_id,
		} = req.body;

		const [result] = await pool.query(
			'UPDATE instructor SET user = IFNULL(?, user), password = IFNULL(?, password), nombre=IFNULL(?, nombre), apellido=IFNULL(?, apellido), correo=IFNULL(?, correo), celular=IFNULL(?, celular), ficha_id=IFNULL(?, ficha_id), pre_id=IFNULL(?, pre_id) WHERE cedula = ?',
			[
				user,
				password,
				nombre,
				apellido,
				correo,
				celular,
				ficha_id,
				pre_id,
				cedula,
			]
		);

		if (result.affectedRows <= 0) {
			return res.status(404).json({
				message: 'User not found 🔎',
			});
		}

		res.json('Updated user');
	} catch (error) {
		return res.status(500).json({
			message: 'Something goes wrong ❌',
		});
	}
};
