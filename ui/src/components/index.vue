<template>
  <EasyDataTable :headers="headers" :items="items" alternating>
    <template #expand="item">
      <div v-if="item.nested">
        <EasyDataTable :headers="item.kids.headers" :items="item.kids.data" alternating>
          <template #expand="phone">
            <div>
              <EasyDataTable :headers="phone.kids.kids.headers" :items="phone.kids.kids.data" alternating />
            </div>
          </template>
        </EasyDataTable>
      </div>
    </template>
    <template #item-action="item">
        <button
          @click="deleteItem(item)"> delete </button>
    </template>
  </EasyDataTable>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Person } from 'types/person';
import { peopleStore } from '@/store/people';
import type { Header, Item } from "vue3-easy-data-table";

export default class PeopleComponent extends Vue {
  get headers(): Header[] {
    const returnHeareds: Header[] = [];
    const result = peopleStore.allPeople;
    if (result.length > 0) {
      var headers = Object.keys(result[0].data);
      headers.forEach(header => {
        returnHeareds.push({
          text: header,
          value: header
        })
      });
    }
    returnHeareds.push({
      text: 'Action',
      value: 'action'
    })

    return returnHeareds;
  }

  get items(): Item[] {
    var output: Item[] = [];
    if (peopleStore.allPeople.length > 0) {
      output = this.mapObject(peopleStore.allPeople);
    }

    return output;
  }

  deleteItem(item: Item): void {
    peopleStore.deleteRow(item['Identification number']);
  }

  async created(): Promise<void> {
    await peopleStore.getPeople();
  }

  private mapObject(people: Person[]): Item[] {
    var output: Item[] = [];
    people.forEach(person => {
      var item = this.mapPerson(person);
      if (item.kids && item.kids.data.length > 0) {
        item.nested = true;
      }
      output.push(item);
    });

    return output;
  }

  private mapPerson(person: Person): Item {
    var item: Item = {
      ...person.data,
      kids: {
        data: []
      }
    };
    for (var prop in person.kids) {
      var records = person.kids[prop].records;

      var headers = Object.keys(records[0].data);
      const returnHeareds: Header[] = [];
      headers.forEach(header => {
        returnHeareds.push({
          text: header,
          value: header
        })
      });
      item.kids.headers = returnHeareds;
      records.forEach(record => {
        item.kids.data.push({
          ...record.data,
          kids: this.mapKids(record.kids)
        })
      });
      break;
    }
    if (item.kids && item.kids.data.length > 0) {
      item.nested = true;
    }

    return item;
  }

  private mapKids(kids: Record<string,{records: Person[]}>) {
    var item: Item = {
      kids: {
        data: []
      }
    };
  for (var prop in kids) {
      var records = kids[prop].records;

      var headers = Object.keys(records[0].data);
      const returnHeareds: Header[] = [];
      headers.forEach(header => {
        returnHeareds.push({
          text: header,
          value: header
        })
      });
      item.kids.headers = returnHeareds;
      records.forEach(record => {
        item.kids.data.push({
          ...record.data,
          kids: this.mapKids(record.kids)
        })
      });
      break;
    }
    if (item.kids && item.kids.data.length > 0) {
        item.nested = true;
    }
    return item;
  }
}
</script>