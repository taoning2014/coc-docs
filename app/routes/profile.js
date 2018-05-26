import Route from '@ember/routing/route';
import data from '../models';

export default Route.extend({
  model() {
    return data;
  },
});
