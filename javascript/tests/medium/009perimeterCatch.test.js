const perimeter = require('../../medium/009perimeterCatch');

test('perimeter("s", 7) returns "28"', () => {
    expect(perimeter("s", 7)).toEqual(28);
});

test('perimeter("c", 4) returns "25.12"', () => {
    expect(perimeter("c", 4)).toEqual(25.12);
});

test('perimeter("d", 4) returns "25.12"', () => {
    expect(perimeter("d", 4)).toBe('Enter valid input');
});
