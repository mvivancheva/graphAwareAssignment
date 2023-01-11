import { Router } from 'express';
import { getPeople } from './people';

export const peopleRouter = Router();

//People Endpoints
peopleRouter.get(`/`, getPeople);
