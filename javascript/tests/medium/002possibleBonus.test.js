const possibleBonus = require('../../medium/002possibleBonus');

test('possibleBonus(3, 7) returns true', () => {
    expect(possibleBonus(3, 7)).toBe(true);
});

test('possibleBonus(1, 9) returns false', () => {
    expect(possibleBonus(1, 9)).toBe(false);
});