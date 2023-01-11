// All values default to PRODUCTION
// -- override configs in environment specific files
import { AppConfig } from 'config';

const ENV = process.env.NODE_ENV || 'production';
const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 8085;
const BASE_URL = process.env.BASE_URL || 'https://production-url.com';

export default {
    baseURL: `${BASE_URL}`,
    uiBaseURL:`${BASE_URL}`,
    environment: `${ENV}`,
    host: HOST,
    port: PORT
} as AppConfig;
