const { greeting } = require('../src/code');

test('Log but no result', () => {
  expect(greeting('John')).toBeUndefined();
});