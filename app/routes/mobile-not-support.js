import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    this._super(...arguments);

    // If user open route in desktop, redirect to profile
    if (!this.get('isMobile.any')) {
      this.replaceWith('profile');
    }
  },
});
