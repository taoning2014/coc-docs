import Service from '@ember/service';

/**
 * Implement get data as service so it can cache the computation of get data for
 * each type
 */
export default Service.extend({
  init() {
    this._super(...arguments);
    this._cache = {};
  },

  getHeader(key, data) {
    return Object.keys(data);
  },

  getContent(key, data) {
    // NOTE: This won't work if using ember-data, because data won't be POJO
    // Each item may either be a stand-alone value or array, need to transform
    // data into arrays by pick up one item each in the values.
    const items = Object.values(data);

    return items.reduce(
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
  },
});
