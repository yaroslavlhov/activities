import http from '../http.service';
import IActivity from '../../interfaces/activity.interface';

export default {
  async getActivity(params: string = ''): Promise<IActivity> {
    return (await http.get(`api/activity/?${params}`)).data;
  },

  async getRandomActivity(): Promise<IActivity> {
    return (await http.get('api/activity/')).data;
  },
};
