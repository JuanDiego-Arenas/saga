import mongoose from "mongoose"

const noticiaModel = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    createby: {
        type: String,
        trim: true,
    },
    image: String
}, {
    timestamps: true
})

export default mongoose.model('Noticia', noticiaModel)