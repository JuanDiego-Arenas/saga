import Product from '../models/product.model.js'

export function registerProduct(req, res){
    const { codigoProduct, tipoCalzado } = req.body
    console.log(typeof(tipoCalzado))
    res.status(200).send({ data: req.body })
}

