import peopleJson from '../data/people.json';
import { Person } from 'person';
import { ErrorResult, ResponseResult } from 'response';

export default class PeoplesController {

    getPeople = async(): Promise<ResponseResult<Person[]>> => {
        const mappedRepsonse : ResponseResult<Person[]> = {
            isError: false     
        };
        try {
            const result = peopleJson as Person[];
            mappedRepsonse.payload = result;
            return Promise.resolve(mappedRepsonse);

        } catch (error) {
            mappedRepsonse.isError = true;
            mappedRepsonse.error = {
                code: 400,
                message: 'Some meaningful message'
            } as ErrorResult;

            return Promise.resolve(mappedRepsonse);
        }
    }
}