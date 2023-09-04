import { pool } from '../db.js';

export const getPrestamo = async (req, res) => {
	try {
		const [rows] = await pool.query('SELECT * FROM prestamos');
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
			'SELECT * FROM prestamos WHERE codigo = ?',
			[req.params.codigo]
		);

		if (rows.length <= 0) {
			return res.status(404).json({
				message: 'préstamo not found',
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
export const createPrestamo = async (req, res) => {
	try {
		const { producto, codigo, descripcion, observaciones } = req.body;

		const [rows] = await pool.query(
			// Los valores van "?", para después ser recibidos desde el body
			'INSERT INTO prestamos (producto, codigo, descripcion, observaciones) VALUES (?, ?, ?, ?)',
			[producto, codigo, descripcion, observaciones]
		);

		// if (cedula ) {

		// }

		res.send({
			codigo,
			producto,
		});
	} catch (error) {
		return res.status(500).json({
			message: 'Something goes wrong ❌',
		});
	}
};

export const deletePrestamo = async (req, res) => {
	try {
		const [result] = await pool.query(
			'DELETE FROM prestamos WHERE codigo = ?',
			[req.body.codigo]
		);

		if (result.affectedRows <= 0) {
			return res.status(404).json({
				message: 'producto not found',
			});
		}

		res.sendStatus(204);
	} catch (error) {
		return res.status(500).json({
			message: 'Something goes wrong ❌',
		});
	}
};

export const updatePrestamo = async (req, res) => {
	try {
		const { producto, codigo, descripcion, observaciones } = req.body;

		const [result] = await pool.query(
			'UPDATE prestamos SET producto = IFNULL(?, producto), descripcion = IFNULL(?, descripcion), observaciones=IFNULL(?, observaciones) WHERE codigo = ?',
			[producto, descripcion, observaciones, codigo]
		);

		if (result.affectedRows <= 0) {
			return res.status(404).json({
				message: 'Producto not found',
			});
		}

		res.json('Updated producto');
	} catch (error) {
		return res.status(500).json({
			message: 'Something goes wrong ❌',
		});
	}
};
