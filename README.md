# To use Serial port in angular

- installing the requirements

```bash
npm install electron@11 --save
npm install  electron-rebuild --save-dev
npm install serialport --save
npm install @types/serialport --save-dev
npm install @types/node --save-dev
```

- if we use serial port with electron we have to rebuild the electron. run this command

```bash
./node_modules/.bin/electron-rebuild
```

**_Note:_** rebuild process could throw us an error. to fix this, install build-essential

```bash
sudo apt-get update

sudo apt-get install build-essential

sudo apt-get upgrade
```

- to added custom webpack to load serialport

```bash
npm i @angular-builders/custom-webpack
npm i @angular-builders/dev-server
npm i @angular-devkit/build-angular
```

- changes in angular.json

```json
"architect": {
    "build": {
      "builder": "@angular-builders/custom-webpack:browser",
      "options": {
        "customWebpackConfig": {"path": "./custom-webpack.config.js"},
...
"serve": {
      "builder": "@angular-builders/dev-server:generic",
```

- creating custom-webpack.config.js

```bash
module.exports = {
  "externals": {
    "serialport": "require('serialport')"
  }
}
```

- and ready to go !

# installing angular material into project

- ng add @angular/material doesnt work due to custom custom-webpack
- then we install material manually

```bash
npm install --save @angular/material @angular/cdk @angular/animations
```

- after that we config the styles.css file

```css
@import "~@angular/material/prebuilt-themes/indigo-pink.css";

html,
body {
  height: 100%;
}
body {
  margin: 0;
  font-family: Roboto, "Helvetica Neue", sans-serif;
  /* background-color: black; */
}
```

- and index.html

```html
<link
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap"
  rel="stylesheet"
/>
<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"
/>
```

**note:**

- when we start the app console throw us a renderer error. to solve this we added this line in main.js

```javascript
app.allowRendererProcessReuse = false;
```

# to run the app

```bash
npm run electron-build
```

# my resources

- https://www.sitepoint.com/build-a-desktop-application-with-electron-and-angular/
- https://github.com/serialport/node-serialport/issues/1975
- https://stackoverflow.com/questions/60106922/electron-non-context-aware-native-module-in-renderer

# SerialTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
