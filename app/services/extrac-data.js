import Service from '@ember/service';

const MATHOD_NAMES = {
  GET_MODEL: 'getModel',
  GET_HEADER: 'getHeader',
  GET_CONTENT: 'getContent',
};

/**
 * Calculate cache key based on passed in value
 * Use cacheKey to flat cache data, so cache will be just one layer
 *
 * @param {String} method - name of the method
 * @param {String} name - name property of the record
 * @param {String} dataKeyHash - (optional) Concat properties from data table
 */
function _calCacheKey(method, name, dataKeyHash) {
  return dataKeyHash ? `${method}|${name}|${dataKeyHash}` : `${method}|${name}`;
}

/**
 * Implement get data as service so it can cache the computation of get data for
 * each type
 */
export default Service.extend({
  init() {
    this._super(...arguments);
    this._cache = {};
  },

  /**
   * Get model data for detail page
   *
   * @param {String} type - type of the data, can be 'heros', 'buidling', etc
   * @param {String} name - name property from record, use to calculate cache key
   * @param {Object} profile - model data from the parent route
   */
  getModel(type, name, profile) {
    const cacheKey = _calCacheKey(MATHOD_NAMES.GET_MODEL, name);
    let result;

    if (this._cache[cacheKey]) {
      result = this._cache[cacheKey];
    } else {
      // I won't write those ugly code in production :D
      // Should access model through ember-data
      const [filteredByType] = profile.filter(item => item.type === type) || [];

      const { data } = filteredByType || {};

      const [filteredByName] =
        data.filter(profile => profile.name === name) || [];

      result = filteredByName;
    }

    return result;
  },

  /**
   * Get table header
   *
   * @param {String} name - name property from record, use to calculate cache key
   * @param {Object} data - an data item from record
   */
  getHeader(name, data) {
    return Object.keys(data);
  },

  /**
   * Get table body
   *
   * @param {String} name - name property from record, use as a cache key
   * @param {Object} data - an data item from record
   */
  getContent(name, data) {
    const cacheKey = _calCacheKey(
      MATHOD_NAMES.GET_CONTENT,
      name,
      Object.keys(data).join('')
    );
    let result;

    if (this._cache[cacheKey]) {
      result = this._cache[cacheKey];
    } else {
      // NOTE: This won't work if using ember-data, because data won't be POJO
      // Each item may either be a stand-alone value or array, need to transform
      // data into arrays by pick up one item each in the values.
      const items = Object.values(data);

      result = items.reduce(
        (acc, cur) => {
          if (!Array.isArray(cur)) {
            acc[0].push(cur);
            return acc;
          }

          cur.forEach((item, index) => {
            if (acc.length < index + 1) {
              acc.push([]);
            }

            acc[index].push(item);
          });

          return acc;
        },
        [[]]
      );
      this._cache[cacheKey] = result;
    }
    return result;
  },
});
