import { config } from 'dotenv';
config();

export const URI_MONGO = process.env.URI_MONGO;
export const TOKEN_SECRET = process.env.TOKEN;
export const PORT = process.env.PORT || 5000;
export const EMAIL_ADDRESS = process.env.EMAIL_ADDRESS;
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
export const FRONTEND_URL = process.env.FRONTEND_URL;
