
import { Request, Response } from 'express';
import PeopleController from '../controllers/people.controller';

export const getPeople = async(
    req: Request,
    res: Response
) => {
    const peopleController = new PeopleController();
    const result = await peopleController.getPeople();
    return res.json(result);
};
