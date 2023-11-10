import Noticia from '../models/noticias.models.js'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

export const createNoticia = async (req, res) => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)

    const { title, description, createby } = req.body
    const file = req.files.image

    const titlePath = title.split('').map((e) => e === ' ' ? '-' : e ).join('')

    try{
        const noticeFound = await Noticia.findOne({ title })
        if(noticeFound) return res.status(401).json({ msg: 'Titulo de Noticia En uso' })

        const noticesDirectory = path.resolve(__dirname, '..', 'uploads', 'notices', titlePath);

        if (!fs.existsSync(noticesDirectory)) {
            fs.mkdirSync(noticesDirectory, { recursive: true });
        }

        const rutaArchivoRelativa = path.join('uploads', 'notices', titlePath , file.name);
        const rutaSinUpload = path.join('notices', titlePath , file.name)

        fs.writeFileSync(path.resolve(__dirname, '..', rutaArchivoRelativa), file.data);

        const newNotice = new Noticia({ 
            title: title, 
            description: description, 
            image: rutaSinUpload,
            createby: createby
        })

        const noticeSave = await newNotice.save();

        res.status(200).json(noticeSave)

    } catch(error){
        console.log(error)
    }
}

export const getNotices = async (req, res) => {
    try{
        const data = await Noticia.find()
        res.status(200).json(data)
    } catch(error){
        console.log(error)
    }
}

export const updateNotices = async (req, res) => {
    res.status(200).json({ msg: 'Todo O.K Update Notice' })
}

export const deleteNotices = async (req, res) => {
    res.status(200).json({ msg: 'Todo O.K Delete Notice' })
}