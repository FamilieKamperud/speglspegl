
To run tests:
npm run test:watch

To start server:
npm start

To compile for deployment:
npm run deploy

Deployment build creates bundle.js (with all javascript and css),
and files for fonts. These are created in a "dist" folder
Copy these files to branch gh-pages to deploy to production website
(johanhelsing.github.io/speglspegl)

Project structure:
    src:
      actions:
        All redux actions
      components:
        All react components
      fonts:
        duh...
      lib:
        reusable independent functions
      mockData:
        duh...
      reducers:
        all redux reducers
      services:
        integrations with external APIs
      store:
        the redux store
      
