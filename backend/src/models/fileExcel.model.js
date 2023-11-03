import mongoose from 'mongoose'

const ExcelFile = mongoose.Schema({
    filename: String, 
    content: String
})


export default mongoose.model('ExcelFile', ExcelFile)