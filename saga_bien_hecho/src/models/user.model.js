import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    cc: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    rol: {
        type: String
    },
}, {
    timestamps: true
})

export default mongoose.model('User', userSchema)