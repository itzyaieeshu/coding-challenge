const countBoomerangs = require('../../hard/003countBoomerangs');

test('countBoomerangs([9, 5, 9, 5, 1, 1, 1]) should returns 2', () => {
  expect(countBoomerangs([9, 5, 9, 5, 1, 1, 1])).toBe(2);
});

test('rightRotations("abc") should returns ["abc", "cab", "bca"]', () => {
  expect(countBoomerangs([4, 4, 4, 9, 9, 9, 9])).toBe(0);
});
