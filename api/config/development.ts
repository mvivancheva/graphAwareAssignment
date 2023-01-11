import { AppConfig } from 'config';

const ENV = process.env.NODE_ENV || 'production';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8095;
const BASE_URL = `http://${HOST}:${PORT}`;

export default {
    baseUrl: `${BASE_URL}`,
    environment: `${ENV}`,
    uiBaseURL:"http://localhost:5000",
    host: HOST,
    port: PORT
} as AppConfig;
