import Controller from '@ember/controller';

export default Controller.extend({
  shouldExpandPanel: false,

  actions: {
    toggle(toggleAction) {
      // Need to expand panel for user to click on the acutal link, otherwise,
      // user's first click to the panel to expand it will count as a toggle
      // action, so the sidenav will hide
      this.set('shouldExpandPanel', true);
      toggleAction();
    },
  },
});
