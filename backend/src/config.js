import { config } from 'dotenv';
config();

export const URI_MONGO = process.env.URI_MONGO;

export const TOKEN_SECRET = process.env.TOKEN;

export const PORT = process.env.PORT
