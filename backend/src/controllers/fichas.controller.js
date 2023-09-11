import { pool } from '../db.js';

export const getFichas = async (req, res) => {
	try {
		const [rows] = await pool.query('SELECT * FROM fichas');
		res.json(rows);
	} catch (error) {
		return res.status(500).json({
			message: 'Something goes wrong ❌',
		});
	}
};

export const getFicha = async (req, res) => {
	try {
		const [rows] = await pool.query(
			'SELECT * FROM fichas WHERE ficha = ?',
			[req.params.ficha]
		);

		if (rows.length <= 0) {
			return res.status(404).json({
				message: 'ficha not found 🔎',
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
export const createFichas = async (req, res) => {
	try {
		const { ficha, ins_id } = req.body;

		const [rows] = await pool.query(
			// Los valores van "?", para después ser recibidos desde el body
			'INSERT INTO fichas (ficha_id, ficha, ins_id) VALUES (?, ?, ?)',
			[ficha, ficha, ins_id]
		);

		res.send({
			ficha,
			ins_id,
		});
	} catch (error) {
		return res.status(500).json({
			message: 'Something goes wrong ❌',
		});
	}
};

export const deleteFichas = async (req, res) => {
	try {
		const [result] = await pool.query(
			'DELETE FROM fichas WHERE ficha = ?',
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

export const updateFichas = async (req, res) => {
	try {
		const { ficha_id, ficha, ins_id } = req.body;

		const [result] = await pool.query(
			'UPDATE fichas SET ficha=IFNULL(?, ficha), ins_id=IFNULL(?, ins_id) WHERE ficha_id = ?',
			[ficha, ins_id, ficha_id]
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
