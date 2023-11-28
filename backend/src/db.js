import mongoose from 'mongoose';
import { URI_MONGO } from './config.js';

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://adminadmin:asd1003993886@saga.vbcpa6v.mongodb.net/saga') // mongodb+srv://adminadmin:asd1003993886@saga.vbcpa6v.mongodb.net
        console.log('>>> DB is connected <<<')
    } catch (error) {
        console.log(error)
    }
}
