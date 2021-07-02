const count = require('../../medium/005integerDigitCount');

test('count(654321) returns "6"', () => {
    expect(count(654321)).toEqual(6);
});

test('count(318) returns "3"', () => {
    expect(count(318)).toEqual(3);
});

test('count(-92563) returns "5"', () => {
    expect(count(-92563)).toEqual(5);
});

test('count(-314890) returns "6"', () => {
    expect(count(-314890)).toEqual(6);
});
