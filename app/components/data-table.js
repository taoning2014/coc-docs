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
    const key = this.get('key');
    const data = this.get('data');

    this.setProperties({
      header: this.get('extracData').getHeader(key, data),
      content: this.get('extracData').getContent(key, data),
    });
  },
});
