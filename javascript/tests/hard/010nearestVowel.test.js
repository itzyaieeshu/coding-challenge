const nearestVowel = require('../../hard/010nearestVowel');

test('nearestVowel("c") should returns "a"', () => {
  expect(nearestVowel('c')).toEqual('a');
});

test('nearestVowel("i") should returns "i"', () => {
  expect(nearestVowel('i')).toEqual('i');
});

test('nearestVowel("b") should returns "a"', () => {
  expect(nearestVowel('b')).toEqual('a');
});

test('nearestVowel("s") should returns "u"', () => {
  expect(nearestVowel('s')).toEqual('u');
});
