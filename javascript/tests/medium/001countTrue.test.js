const countTrue = require('../../medium/001countTrue');

test('countTrue([true, false, false, true, false]) returns "2"', () => {
    expect(countTrue([true, false, false, true, false])).toBe(2);
});