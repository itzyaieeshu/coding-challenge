const evenLast = require('../../medium/011evenLast');

test('evenLast([1, 3, 3, 1, 10]) returns 140', () => {
    expect(evenLast([1, 3, 3, 1, 10])).toBe(140);
});

test('evenLast([-11, 3, 3, 1, 10]) returns 20', () => {
    expect(evenLast([-11, 3, 3, 1, 10])).toBe(20);
});
