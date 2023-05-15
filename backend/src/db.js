// "mysql/promise" para usar las promesas con mysql2
import { createPool } from 'mysql2/promise';
import {
	DB_HOST,
	DB_USER,
	DB_PASSWORD,
	DB_PORT,
	DB_DATABASE,
} from  './config.js'; 

// Hacemos la conexión con la base de datos
// Por defecto el puerto es 3306
export const pool = createPool({
	host: DB_HOST,
	user: DB_USER,
	password: DB_PASSWORD,
	port: DB_PORT,
	database: DB_DATABASE,
});
