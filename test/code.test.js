/* global: test, expect */
const { greetings } = require('../src/code');

test('something', () => {
  expect(greetings('John')).toBeUndefined();
});
