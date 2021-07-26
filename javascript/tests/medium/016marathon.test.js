const marathonDistance = require('../../medium/016marathon');

test('marathonDistance([1, 2, 3, 4]) returns false', () => {
    expect(marathonDistance([1, 2, 3, 4])).toEqual(false);
});

test('marathonDistance([-6, 15, 4]) returns true', () => {
    expect(marathonDistance([-6, 15, 4])).toEqual(true);
});

// marathonDistance([1, 2, 3, 4]) ➞ false

// marathonDistance([1, 9, 5, 8, 2]) ➞ true

// marathonDistance([-6, 15, 4]) ➞ true