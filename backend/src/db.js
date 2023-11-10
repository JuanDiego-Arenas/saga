import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://adminadmin:asd1003993886@saga.vbcpa6v.mongodb.net') // mongodb+srv://adminadmin:asd1003993886@saga.vbcpa6v.mongodb.net
        console.log('>>> DB is connected <<<')
    } catch (error) {
        console.log(error)
    }
}
