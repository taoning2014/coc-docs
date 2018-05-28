import Route from '@ember/routing/route';

export default Route.extend({
  model({ type, name }) {
    // I won't write those ugly code in production :D
    // Should access model through ember-data
    const [filteredByType] =
      this.modelFor('profile').filter(item => item.type === type) || [];

    const { data } = filteredByType || {};

    const [filteredByName] =
      data.filter(profile => profile.name === name) || [];

    return filteredByName;
  },
});
