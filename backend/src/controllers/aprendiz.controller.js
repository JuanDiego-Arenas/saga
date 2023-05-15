import { pool } from '../db.js';

export const getAprendiz = async (req, res) => {
	try {
		const [rows] = await pool.query('SELECT * FROM aprendiz');
		res.json(rows);
	} catch (error) {
		return res.status(500).json({
			message: 'Something goes wrong',
		});
	}
};

export const getUser = async (req, res) => {
	try {
		const [rows] = await pool.query(
			'SELECT * FROM aprendiz WHERE user = ?',
			[req.params.user]
		);

		if (rows.length <= 0) {
			return res.status(404).json({
				message: 'Aprendiz not found',
			});
		}
	} catch (error) {
		return res.status(500).json({
			message: 'Something goes wrong',
		});
	}

	res.json(rows[0]);
};

// Todas las peticiones a la base de datos son asíncronas (async/await)
export const createAprendiz = async (req, res) => {
	try {
		const { user, password, cedula, nombre, apellido, correo, celular } =
			req.body;

		const [rows] = await pool.query(
			// Los valores van "?", para después ser recibidos desde el body
			'INSERT INTO aprendiz (user, password, cedula, nombre, apellido, correo, celular) VALUES (?, ?, ?, ?, ?, ?, ?)',
			[user, password, cedula, nombre, apellido, correo, celular]
		);

			// if (cedula ) {
				
			// }

		res.send({
			id: rows.insertId,
			user,
			password,
			nombre,
		});
	} catch (error) {
		return res.status(500).json({
			message: 'Something goes wrong',
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
				message: 'User not found',
			});
		}

		res.sendStatus(204);
	} catch (error) {
		return res.status(500).json({
			message: 'Something goes wrong',
		});
	}
};

export const updateAprendiz = async (req, res) => {
	const { cedula } = req.body;
	const { user, password } = req.body;

	try {
		const [result] = await pool.query(
			'UPDATE aprendiz SET user = IFNULL(?, user), password = IFNULL(?, password) WHERE cedula = ?',
			[user, password, cedula]
		);

		if (result.affectedRows <= 0) {
			return res.status(404).json({
				message: 'User not found',
			});
		}

		res.json('Updated user');
	} catch (error) {
		return res.status(500).json({
			message: 'Something goes wrong',
		});
	}
};
