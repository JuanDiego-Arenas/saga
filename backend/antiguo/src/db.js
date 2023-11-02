import mongoose from 'mongoose';
import { URI } from './config.js';

export const mongodb = async () => {
	try {
		const db = await mongoose.connect(URI);
		console.log('Connected to', db.connection.name);
	} catch (err) {
		console.log(err);
	}
};
// mongoose.connect(process.env.URI).then(result => {}).catch(err => {
// 		console.log(err);
// 	});
