const sumMissingNumbers = require('../../hard/006sumOfMissingNumbers');

test('sumMissingNumbers([4, 3, 8, 1, 2]) should returns 18', () => {
  expect(sumMissingNumbers([4, 3, 8, 1, 2])).toBe(18);
});

test('sumMissingNumbers([1, 2, 3, 4, 5]) should returns 0', () => {
  expect(sumMissingNumbers([1, 2, 3, 4, 5])).toBe(0);
});
