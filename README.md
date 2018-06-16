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

1. Commit changes in development branch, check out master, rebase with develoment branch.
2. Delete the exising gh-pages, and checkout new branch with same name from master. gh-pages is a special branch that github used to deploy static website.
3. Run `ember build --environment=production`, this will build app in production environment, the build result is under `/dist`.
4. Run `cp -R dist/* ./`.
5. Add and commit change: `git add . && git commit -m 'deploy'`.
6. Push to github: `git push --set-upstream origin gh-pages --force`.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
