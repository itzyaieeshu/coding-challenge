const convert = require('../../hard/009temperatureConverter');

test('convert("35°C") should returns "95°F"', () => {
  expect(convert('35°C')).toBe('95°F');
});

test('convert("19°F") should returns "-7°C"', () => {
  expect(convert('19°F')).toBe('-7°C');
});

test('convert("33") should returns "Error"', () => {
  expect(convert('33')).toBe('Error');
});
