import { Person } from 'types/person';
import PeopleService from '@/services/PeopleService';
import { Action, Module, Mutation, VuexModule } from 'vuex-class-modules';

@Module
class PeopleModule extends VuexModule {
    private _people: Person[] = [];

    public get allPeople(): Person[] {
        return JSON.parse(JSON.stringify(this._people));
    }

    @Mutation
    private setPeople(value: Person[]): void {
        this._people = value;
    }

    @Action
    deleteRow(id: string): void {
        const deletedData = this._people.filter(src => src.data['Identification number'] !== id);
        this.setPeople(deletedData);
    }

    @Action
    async getPeople(): Promise<void> {
        const result = await PeopleService.getPeople();
        if (result.payload && !result.isError) {
            this.setPeople(result.payload);
        } else {
            this.setPeople([]);
        }
    }
}
// register module (could be in any file)
import store from "./index";
export const peopleStore = new PeopleModule({ store, name: "peopleStore" });
