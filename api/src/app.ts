import express from 'express';
import cors from 'cors';
import config, {AppConfig} from 'config';
import { peopleRouter } from './routes';


const defaultPrefix= `/api`;
const peoplePrefix = `${defaultPrefix}/people`;
const appConfig:AppConfig = config;

const port = appConfig.port || 8085;
const host = appConfig.host || 'localhost';
const app: express.Application = express();

const corsOptions = {
    origin: true,
    credentials: true,
    preflightContinue: true,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());

// API Routes
app.use(`${peoplePrefix}`, peopleRouter);

app.listen(port, host, () => {
    console.log("Starting Graph Aware API...");
    console.log(`Server listening on: http://${host}:${port}/api`);
});

