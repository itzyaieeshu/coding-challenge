const oddishOrEvenish = require('../../hard/004oddishOrEvenish');

test('oddishOrEvenish(43) returns "Oddish"', () => {
  expect(oddishOrEvenish(43)).toBe('Oddish');
});

test('oddishOrEvenish(4433) returns "Evenish"', () => {
  expect(oddishOrEvenish(4433)).toBe('Evenish');
});
