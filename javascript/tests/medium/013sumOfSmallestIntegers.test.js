const sumTwoSmallestNums = require('../../medium/013sumOfSmallestIntegers');

test('sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]) returns 3453455', () => {
    expect(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453])).toEqual(3453455);
});

test('sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]) returns 563', () => {
    expect(sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587])).toEqual(563);
});
