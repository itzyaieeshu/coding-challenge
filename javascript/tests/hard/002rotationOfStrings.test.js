const rotationOfStrings = require('../../hard/002rotationOfStrings');

test('leftRotations("abc") should returns ["abc", "bca", "cab"]', () => {
  expect(rotationOfStrings.leftRotations('abc')).toEqual(['abc', 'bca', 'cab']);
});

test('rightRotations("abc") should returns ["abc", "cab", "bca"]', () => {
  expect(rotationOfStrings.rightRotations('abc')).toEqual(['abc', 'cab', 'bca']);
});
