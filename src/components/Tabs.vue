<template>
  <div class="row d-flex justify-content-center mt-5">
    <div class="col-sm-9">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Activities" >
            <create/>
          </b-tab>
          <b-tab title="My list">
            <list/>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Create from './Create.vue';
import List from './List.vue';

@Component({
  components: {
    Create,
    List,
  },
})
export default class Tabs extends Vue {}
</script>

<style scoped lang="scss">

</style>
