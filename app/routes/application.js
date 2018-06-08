import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    this._super(...arguments);

    // If user is in mobile device, redirect to this page when it visit any route
    if (this.get('isMobile.any')) {
      this.replaceWith('mobile-not-support');
    }
  },
});
