import Component from '@ember/component';
import { inject as service } from '@ember/service';

/**
 * @name data-table
 *
 * @example
 *  {{data-table
 *    data=tableData
 *    name=name
 *    formattedData=formattedTableData
 * }}
 *
 * @summary this component is used to create a table for display data. User can
 *          either pass in raw data let the component to format data or user
 *          can pass in formatted data which will talbe will directly use it
 *
 * @param data - {Object} table data
 * @param name - {String} name of data, used as cache key.
 *               FIX: this property should be decoupled from component.
 * @param formattedData - {Object} formatted table data, if this is non empty,
 *                        the component will ignore data property.
 * @property  formattedData.header - {Array} header
 * @property  formattedData.content - {Array} nested array, each elem is a row
 */
export default Component.extend({
  extracData: service('extrac-data'),

  init() {
    this._super(...arguments);
    this._columnArray = [];
  },

  didReceiveAttrs() {
    this._super(...arguments);

    if (this.get('formattedData')) {
      const { header, content } = this.get('formattedData');
      this.setProperties({
        header,
        content,
      });
    } else {
      const name = this.get('name');
      const data = this.get('data');

      this.setProperties({
        header: this.get('extracData').getHeader(name, data),
        content: this.get('extracData').getContent(name, data),
      });
    }
  },
});
