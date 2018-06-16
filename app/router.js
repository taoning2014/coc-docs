import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('profile', function() {
    this.route('detail', { path: '/:type/:name/detail' });
  });
});

export default Router;
