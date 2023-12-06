import { config } from 'dotenv';
config();

export const URI_MONGO = process.env.URI_MONGO;
export const TOKEN_SECRET = process.env.TOKEN;
export const PORT = process.env.PORT || 3000;
export const EMAIL_ADDRESS = process.env.EMAIL_ADDRESS;
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
export const FRONTEND_URL = process.env.FRONTEND_URL;
export const SECRET = process.env.SECRET
export const FRONTEND_URL_2 = process.env.FRONTEND_URL_2;
export const FRONTEND_URL_3 = process.env.FRONTEND_URL_3;
