const coneVolume = require('../../medium/007volumeOfCone');

test('coneVolume(3, 2) returns "12.57"', () => {
    expect(coneVolume(3, 2)).toEqual(12.57);
});

test('coneVolume(18, 0) returns "0"', () => {
    expect(coneVolume(18, 0)).toEqual(0);
});
