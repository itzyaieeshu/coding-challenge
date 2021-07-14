const weight = require('../../medium/008howHeavy');

test('weight(4, 10) returns "0.5"', () => {
    expect(weight(4, 10)).toEqual(0.5);
});

test('weight(15, 10) returns "7.07"', () => {
    expect(weight(15, 10)).toEqual(7.07);
});
