const clone = require('../../medium/012cloneArray');

test('clone([1, 1]) returns [1, 1, [1, 1]]', () => {
    expect(clone([1, 1])).toEqual([1, 1, [1, 1]]);
});

test('clone(["x", "y"] returns ["x", "y", ["x", "y"]]', () => {
    expect(clone(["x", "y"])).toEqual(["x", "y", ["x", "y"]]);
});
