import mongoose from 'mongoose';
import { URI_MONGO } from './config.js';

export const connectDB = async () => {
<<<<<<< HEAD
=======
// <<<<<<< HEAD
>>>>>>> 6d5aefa6384c7b7ecb0cae66e0f8491521211009
    try {
        await mongoose.connect('mongodb+srv://adminadmin:asd1003993886@saga.vbcpa6v.mongodb.net/saga') // mongodb+srv://adminadmin:asd1003993886@saga.vbcpa6v.mongodb.net
        console.log('>>> DB is connected <<<')
    } catch (error) {
        console.log(error)
    }
}
<<<<<<< HEAD
=======
// =======
	try {
		await mongoose.connect(URI_MONGO); // mongodb+srv://adminadmin:asd1003993886@saga.vbcpa6v.mongodb.net
		console.log('>>> DB is connected <<<');
	} catch (error) {
		console.log(error);
	}
;
// >>>>>>> 9d32fae3d490dccb1d8f6ee49dc79936e2bcf895
>>>>>>> 6d5aefa6384c7b7ecb0cae66e0f8491521211009
