const sevenBoom = require('../../hard/001sevenBoom');

test('sevenBoom([1, 2, 3, 4, 5, 6, 7]) returns "Boom!"', () => {
  expect(sevenBoom([1, 2, 3, 4, 5, 6, 7])).toBe('Boom!');
});

test('sevenBoom([8, 6, 33, 100]) returns "there is no 7 in the array"', () => {
  expect(sevenBoom([8, 6, 33, 100])).toBe('there is no 7 in the array');
});
