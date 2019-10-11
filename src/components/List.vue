<template>
  <div>
    <b-table striped hover :items="list" :fields="fields" sticky-header="320px" class="text-center">
      <template v-slot:cell(index)="data">
        {{ data.index + 1 }}
      </template>
      <template v-slot:cell(price)="data">
        <span>{{ getPriceText(data.value) }}</span>
      </template>
      <template v-slot:cell(action)="data">
        <div 
          class="action" 
          @click="clearOne(data.item.key)" 
          v-b-tooltip.hover 
          title="Click to mark as done">
          <i class="far fa-check-circle text-success" role="button"></i>
        </div>
      </template>
    </b-table>
    <button @click="clearAll()" class="btn btn-danger btn-block">Clear all</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import IActivity from '../interfaces/activity.interface';

@Component({
  computed: {
    ...mapGetters(['list']),
  },
})
export default class List extends Vue {
  list: IActivity[];

  fields = [{key: 'index', label: '#'}, 'activity', 'participants', {key: 'price', label: 'Budget'}, {key: 'action', label: ''}];

  clearAll(): void {
    this.$store.dispatch('removeAllActivities');
  }

  clearOne(key: any): void {
    this.$store.dispatch('removeActivity', key);
  }

  getPriceText(price: any): string {
    if (price < 0.2) {
      return 'cheap';
    }
    if (price < 0.4) {
      return 'less cheap';
    }
    if (price < 0.7) {
      return 'normal';
    }
    if (price < 0.9) {
      return 'less expensive';
    }
    return 'expensive';
  }

}

</script>

<style scoped lang="scss">
  .action{
    cursor: pointer;
  }
</style>
