import Vue from 'vue';
import Vuex from 'vuex';
import IActivity from './interfaces/activity.interface';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    types: [
      { value: 'education', text: 'Education' },
      { value: 'recreational', text: 'Recreational' },
      { value: 'social', text: 'Social' },
      { value: 'diy', text: 'Diy' },
      { value: 'charity', text: 'Charity' },
      { value: 'cooking', text: 'Cooking' },
      { value: 'relaxation', text: 'Relaxation' },
      { value: 'music', text: 'Music' },
      { value: 'busywork', text: 'Busywork' },
    ],
    list: [] as IActivity[],
  },
  getters: {
    types: (state) => state.types,
    list: (state) => state.list,
  },
  actions: {
    addActivity({ state, dispatch }, activity): void {
      const key = new Date().valueOf();
      const item = Object.assign({}, activity, { key });
      state.list.push(item);
      dispatch('updateStorage');
    },

    removeActivity({ state, dispatch }, id): void {
      const index = state.list.findIndex((item) => item.key === id);
      if (index + 1) {
        state.list.splice(index, 1);
      }
      dispatch('updateStorage');
    },

    removeAllActivities({ state }): void {
      state.list = [];
      localStorage.removeItem('activityList');
    },

    updateStorage({ state }) {
      localStorage.setItem('activityList', JSON.stringify(state.list));
    },
    getDataFromStorage({ state }) {
      try {
        const data = JSON.parse(localStorage.getItem('activityList') || '');
        if (data) {
          state.list = data;
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
});
