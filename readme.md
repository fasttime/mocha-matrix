# Mocha Matrix

Mocha Matrix test reporter for the browser, inspired by
[tj/mocha-matrix](https://github.com/tj/mocha-matrix).

## Setup Instructions

Add Mocha Matrix to the `devDependencies` of your Node.js project: in the console, switch to your
project folder and enter the following command.

```console
npm install --save-dev mocha-matrix
```

Then edit the HTML file that runs the tests:

```html
<link rel='stylesheet' href='../node_modules/mocha-matrix/mocha-matrix.css'>
<script src='../node_modules/mocha-matrix/index.js'></script>
```

And tell Mocha to use the reporter:

```js
mocha.setup({ ui: 'bdd', reporter: Matrix });
```
