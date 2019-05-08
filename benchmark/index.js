// eslint-disable-next-line import/no-extraneous-dependencies
const { Suite } = require('benchmark');
const gen = require('../src');

const suite = new Suite();

suite.add('gen', () => {
  gen();
}).on('cycle', (event) => {
  console.log(String(event.target));
})
  .run({ async: true });
