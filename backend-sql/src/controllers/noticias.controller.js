import { pool } from '../db.js';

export const getNoticias = async (req, res) => {
	try {
		const [rows] = await pool.query('SELECT * FROM noticias');
		res.json(rows);
	} catch (error) {
		return res.status(500).json({
			message: 'Something goes wrong ❌',
		});
	}
};

export const getNoticia = async (req, res) => {
	try {
		const [rows] = await pool.query(
			'SELECT * FROM noticias WHERE noticia_id = ?',
			[req.params.noticia_id]
		);

		if (rows.length <= 0) {
			return res.status(404).json({
				message: 'Noticia not found 🔎',
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
export const createNoticia = async (req, res) => {
	try {
		const { titulo, contenido } = req.body;

		const [rows] = await pool.query(
			// Los valores van "?", para después ser recibidos desde el body
			'INSERT INTO noticias (titulo, contenido) VALUES (?, ?)',
			[titulo, contenido]
		);

		res.send({
			titulo,
		});
	} catch (error) {
		return res.status(500).json({
			message: 'Something goes wrong ❌',
		});
	}
};

export const deleteNoticia = async (req, res) => {
	try {
		const [result] = await pool.query(
			'DELETE FROM noticias WHERE noticia_id = ?',
			[req.body.noticia_id]
		);

		if (result.affectedRows <= 0) {
			return res.status(404).json({
				message: 'Noticia not found 🔎',
			});
		}

		res.sendStatus(200);
	} catch (error) {
		return res.status(500).json({
			message: 'Something goes wrong ❌',
		});
	}
};

export const updateNoticia = async (req, res) => {
	try {
		const { titulo, contenido, noticia_id } = req.body;

		const [result] = await pool.query(
			'UPDATE noticias SET titulo=IFNULL(?, titulo), contenido=IFNULL(?, contenido) WHERE noticia_id = ?',
			[titulo, contenido, noticia_id]
		);

		if (result.affectedRows <= 0) {
			return res.status(404).json({
				message: 'Ficha not found 🔎',
			});
		}

		res.json('Updated Noticia');
	} catch (error) {
		return res.status(500).json({
			message: 'Something goes wrong ❌',
		});
	}
};
