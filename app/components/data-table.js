import Component from '@ember/component';
import { inject as service } from '@ember/service';

/**
 * @name data-table
 * @example {{data-table data=tableData name=name}}
 * @summary this component is used to create a table for display data
 * @param data - {Object} table data
 * @param name - {String} name of data, used as cache key.
 *               FIX: this property should be decoupled from component.
 */
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
