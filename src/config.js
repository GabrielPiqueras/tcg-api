import { config } from 'dotenv';

config();

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
    tcg_api_key: process.env.TCG_API_KEY
}