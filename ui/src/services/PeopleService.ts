import httpClient from "@/services/http-client";
import { ResponseResult } from 'types/response';
import { Person } from 'types/person';

class PeopleService {
    public async getPeople(): Promise<ResponseResult<Person[]>> {
        const response = await httpClient.get('/people');

        return response.data;
    }
}

export default new PeopleService();
