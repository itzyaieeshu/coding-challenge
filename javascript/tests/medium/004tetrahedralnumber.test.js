const tetra = require('../../medium/004tetrahedralnumber');

test('tetra(2) returns "4"', () => {
    expect(tetra(2)).toEqual(4);
});

test('tetra(6) returns "56"', () => {
    expect(tetra(6)).toEqual(56);
});
