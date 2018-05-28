import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  extracData: service('extrac-data'),

  init() {
    this._super(...arguments);
    this._columnArray = [];
  },

  didReceiveAttrs() {
    this._super(...arguments);
    const name = this.get('name');
    const data = this.get('data');

    this.setProperties({
      header: this.get('extracData').getHeader(name, data),
      content: this.get('extracData').getContent(name, data),
    });
  },
});
