const concat = require('../../medium/006concartenateVariableNumbers');

test('concat([1, 2, 3], [4, 5], [6, 7]) returns "[1, 2, 3, 4, 5, 6, 7]"', () => {
    expect(concat([1, 2, 3], [4, 5], [6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
});

test('concat([1, 2], [3, 4]) returns "[1, 2, 3, 4]"', () => {
    expect(concat([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
});
