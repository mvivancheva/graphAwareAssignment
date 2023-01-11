// check for environment, if not, assume dev
if (process.env.NODE_ENV === 'development') {
    // require .env configuration
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('dotenv').config();
}

require('./src/app');
