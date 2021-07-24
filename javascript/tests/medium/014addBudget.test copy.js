const cubeDiagonal = require('../../medium/015diagonalOfCube');

test('cubeDiagonal(8) returns 3.42', () => {
    expect(cubeDiagonal(8)).toEqual(3.42);
});

test('cubeDiagonal(1157.625) returns 18.19', () => {
    expect(cubeDiagonal(1157.625)).toEqual(18.19);
});
