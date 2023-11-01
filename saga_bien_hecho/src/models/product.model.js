import mongoose from 'mongoose'

const productModel = mongoose.Schema({
    codigoProduct: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    nombreProduct: {
        type: String,
        required: true,
        trim: true,
    },
    precioUni: {
        type: String,
        required: true,
        trim: true,
    },
    tallas:{
        type: [String],
        required: true,
        trim: true
    },
    categorias: {
        type: [String],
        required: true,
        trim: true
    },
    tipoCalzado: {
        type: [String],
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        trim: true,
        required: true
    },
    images: {
        type: [String]
    }
})

export default mongoose.model('Producto', productModel)
