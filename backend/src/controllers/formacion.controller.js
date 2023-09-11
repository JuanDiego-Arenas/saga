import { pool } from '../db.js';

export const getFormacion = async (req, res) => {
	try {
		const [rows] = await pool.query('SELECT * FROM formacion');
		res.json(rows);
	} catch (error) {
		return res.status(500).json({
			message: 'Something goes wrong',
		});
	}
};

export const getFicha = async (req, res) => {
	try {
		const [rows] = await pool.query(
			'SELECT * FROM formacion WHERE ficha = ?',
			[req.params.ficha]
		);

		if (rows.length <= 0) {
			return res.status(404).json({
				message: 'Ficha not found 🔎',
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
export const createFormacion = async (req, res) => {
	try {
		const { ficha, nombre, tipo, jornada, numero_amb, sede } = req.body;

		const [rows] = await pool.query(
			// Los valores van "?", para después ser recibidos desde el body
			'INSERT INTO formacion (ficha, nombre, tipo, jornada, numero_amb, sede) VALUES (?, ?, ?, ?, ?, ?)',
			[ficha, nombre, tipo, jornada, numero_amb, sede]
		);

		res.send({
			ficha,
			nombre,
			numero_amb,
			sede,
		});
	} catch (error) {
		return res.status(500).json({
			message: 'Something goes wrong ❌',
		});
	}
};

export const deleteFormacion = async (req, res) => {
	try {
		const [result] = await pool.query(
			'DELETE FROM formacion WHERE ficha = ?',
			[req.body.ficha]
		);

		if (result.affectedRows <= 0) {
			return res.status(404).json({
				message: 'Ficha not found 🔎',
			});
		}

		res.sendStatus(200);
	} catch (error) {
		return res.status(500).json({
			message: 'Something goes wrong ❌',
		});
	}
};

export const updateFormacion = async (req, res) => {
	try {
		const { ficha, nombre, jornada, numero_amb, sede } = req.body;

		const [result] = await pool.query(
			'UPDATE formacion SET nombre=IFNULL(?, nombre), jornada=IFNULL(?, jornada), numero_amb=IFNULL(?, numero_amb), sede=IFNULL(?, sede) WHERE ficha = ?',
			[nombre, jornada, numero_amb, sede, ficha]
		);

		if (result.affectedRows <= 0) {
			return res.status(404).json({
				message: 'Ficha not found 🔎',
			});
		}

		res.json('Updated Ficha');
	} catch (error) {
		return res.status(500).json({
			message: 'Something goes wrong ❌',
		});
	}
};
