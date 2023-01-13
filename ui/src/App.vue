<template>
  <PeopleComponent/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PeopleComponent from './components/index.vue';

@Options({
  components: {
    PeopleComponent,
  },
})
export default class App extends Vue {}
</script>
