import Noticia from '../models/noticias.models.js';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

export const getNotices = async (req, res) => {
	try {
		const data = await Noticia.find();
		res.status(200).json(data);
	} catch (error) {
		console.log(error);
	}
};

export const createNoticia = async (req, res) => {
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);

	const { title, description, createby, rol } = req.body;

	const titlePath = title
		.split('')
		.map(e => (e === ' ' ? '-' : e))
		.join('');

	try {
		const file = req.files.image;
		const noticeFound = await Noticia.findOne({ title });
		if (noticeFound)
			return res.status(401).json({ msg: 'Titulo de Noticia En uso' });

		const noticesDirectory = path.resolve(
			__dirname,
			'..',
			'uploads',
			'notices',
			titlePath
		);

		if (!fs.existsSync(noticesDirectory)) {
			fs.mkdirSync(noticesDirectory, { recursive: true });
		}

		const rutaArchivoRelativa = path.join(
			'uploads',
			'notices',
			titlePath,
			file.name
		);
		const rutaSinUpload = path.join('notices', titlePath, file.name);

		fs.writeFileSync(
			path.resolve(__dirname, '..', rutaArchivoRelativa),
			file.data
		);

		const newNotice = new Noticia({
			title: title,
			description: description,
			image: rutaSinUpload,
			createby: createby,
			rol: rol,
		});

		const noticeSave = await newNotice.save();

		res.status(200).json(noticeSave);
	} catch (error) {
		return res.status(500).json({ msg: error.message });
	}
};

export const updateNotices = async (req, res) => {
	const { id } = req.params;
	const noticeData = req.body;

	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);

	try {
		// title
		if (noticeData.title) {
			return res.status(423).json({ msg: 'El titulo no se puede actualizar' });
		}

		// Image
		if (req.files) {
			const noticeFound = await Noticia.findOne({ _id: id });
			const file = req.files.image;

			// Eliminar la imagen anterior si existe
			if (noticeFound.image) {
				const oldImageFullPath = path.resolve(
					__dirname,
					'..',
					'uploads',
					noticeFound.image
				);
				fs.unlinkSync(oldImageFullPath);
			}

			const titlePath = noticeFound.title
				.split('')
				.map(e => (e === ' ' ? '-' : e))
				.join('');

			const rutaArchivoRelativa = path.join(
				'uploads',
				'notices',
				titlePath,
				file.name
			);
			const rutaSinUpload = path.join('notices', titlePath, file.name);

			fs.writeFileSync(
				path.resolve(__dirname, '..', rutaArchivoRelativa),
				file.data
			);
			noticeData.image = rutaSinUpload;
		}

		const updatedNotice = await Noticia.findByIdAndUpdate(id, noticeData, {
			new: true,
		});

		return res.status(200).send({ msg: 'Datos actualizados (～￣▽￣)～' });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ msg: error.message });
	}
};

export const deleteNotices = async (req, res) => {
	const { id } = req.params;

	try {
		const deletedNotice = await Noticia.findOneAndDelete({ _id: id });

		if (!deletedNotice) {
			res.status(404).send({ msg: 'Notice not fount (╯°□°）╯︵ ┻━┻' });
		} else {
			res.status(200).send({ msg: 'Delete notice (●^◡^●)' });
		}
	} catch (error) {
		return res.status(500).json({ msg: error.message });
	}
};
