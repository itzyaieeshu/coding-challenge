const numbersInString = require('../../hard/007numbersInStrings');

test('numInStr(["1a", "a", "2b", "b"]) returns ["1a", "2b"]', () => {
  expect(numbersInString.numInStr(['1a', 'a', '2b', 'b'])).toEqual(["1a", "2b"]);
});

test('numInStr(["this is a test", "test1"]) returns ["test1"]', () => {
  expect(numbersInString.numInStr(["this is a test", "test1"])).toEqual(["test1"]);
});

test('numInStr(["1a", "a", "2b", "b"]) returns ["1a", "2b"]', () => {
  expect(numbersInString.numInStr2(['1a', 'a', '2b', 'b'])).toEqual(["1a", "2b"]);
});

test('numInStr(["this is a test", "test1"]) returns ["test1"]', () => {
  expect(numbersInString.numInStr2(["this is a test", "test1"])).toEqual(["test1"]);
});
