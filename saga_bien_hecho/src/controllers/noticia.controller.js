import Noticia from '../models/noticias.models.js'

export const createNoticia = (req, res) => {
    res.status(200).send({ msg: 'ok' })
}