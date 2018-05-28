import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  extracData: service('extrac-data'),

  model({ type, name }) {
    const profile = this.modelFor('profile');
    return this.get('extracData').getModel(type, name, profile);
  },
});
