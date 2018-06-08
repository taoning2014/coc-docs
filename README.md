# coc-docs

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd coc-docs`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200/coc-docs/](http://localhost:4200/coc-docs/).
* Visit your tests at [http://localhost:4200/coc-docs/tests](http://localhost:4200/coc-docs/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Currently the app is deployed to [github pages](https://pages.github.com/), follow steps:

1. Commit changes in development branch.
2. Check out branch gh-pages which is a special branch that github used to deploy static website.
3. Rebase development branch.
4. Run `ember build --environment=production`, this will build app in production environment, the build result is under `/dist`.
5. Run `cp -R dist/* ./`.
6. Add and commit change: `git commit -a -m 'development 001'`.
7. Push to github.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
