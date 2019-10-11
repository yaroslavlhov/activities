<template>
  <div>
    <div class="row">
      <div class="col-md-8">
        <div class="form-group">
          <label for="name">You should:</label>
          <b-form-textarea
            v-model="activity.activity"
            class="form-control"
            id="name" rows="10" 
            placeholder="Type activity here..."
            no-resize
          ></b-form-textarea>
        </div>
        
      </div>
      <div class="col-md-4">
        <h5>Activity details:</h5>
        <div class="form-group">
          <label for="type" class="text-muted">Type</label>
          <b-form-select v-model="activity.type" :options="types" class="mb-3">
          </b-form-select>
        </div>
        <div class="form-group">
          <label for="participants" class="text-muted">Participants</label>
          <input 
            v-model="activity.participants"
            type="number" 
            class="form-control"
            id="participants"
          >
        </div>
        <div class="form-group">
          <label for="budget" class="text-muted">Budget</label>
          <input 
            v-model="activity.price" 
            type="range" 
            class="form-control" 
            id="budget" 
            min="0" 
            max="1" 
            step="0.1"
          >
          <div>
            <small class="text-muted">cheap</small>
            <small class="text-muted float-right">expensive</small>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 mb-3">
        <button @click="create()" :disabled="disableCreate" class="btn btn-danger btn-block">Save for later</button>
      </div>
      <div class="col-md-4 mb-3">
        <button @click="hitMe()" class="btn btn-primary btn-block">Hit me with a new one!</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject, Provide } from 'vue-property-decorator';
import IActivity from '../interfaces/activity.interface';
import { mapGetters } from 'vuex';
import activityApi from '../services/api/activity';
import notification from '../services/notification.service';

@Component({
  computed: {
    ...mapGetters(['types']),
  },

})
export default class Create extends Vue {

  types: any;

  @Provide() activity: IActivity = {
    activity: '',
    type: null,
    participants: 0,
    price: 0,
  };

  addActivity(activity: IActivity): void {}

  get disableCreate() {
    return !(this.activity.activity && this.activity.participants);
  }
  

  created() {
    this.setRandomActivity();
  }

  async hitMe($event: any) {
    const {type, participants, price} = this.activity;
    let searchParams = `type=${type}&price=${price}`;
    if (participants) {
      searchParams += `&participants=${participants}`;
    }
    const activity = await activityApi.getActivity(searchParams);
    this.setActivity(activity);
  }

  async setRandomActivity() {
    const random = await activityApi.getRandomActivity();
    this.setActivity(random);
  }

  setActivity(data) {
    if (data.error) {
      notification.error(data.error);
    } else {
      Object.assign(this.activity, data);
    }
  }

  create(): void {
    this.$store.dispatch('addActivity', this.activity);
  }

}
</script>

<style scoped lang="scss">

</style>
