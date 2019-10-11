<template>
  <div class="container">
    <tabs/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Tabs from './components/Tabs.vue';

@Component({
  components: {
    Tabs,
  },
})
export default class App extends Vue {
  created() {
    this.$store.dispatch('getDataFromStorage'); 
  }
}
</script>

<style lang="scss">
</style>
