const sumTwoSmallestNums = (arr) => {
  arr.sort((a, b) => a - b);
  let i = 0;
  while (i<arr.length) {
    if (Math.sign(arr[i]) === -1) {
      arr.splice(i, 1);
    } else {
      i++;
    }
  }
  return arr[0] + arr[1];
};

module.exports = sumTwoSmallestNums;
// Return the Sum of the Two Smallest Numbers
// Create a function that takes an array of numbers and returns
// the sum of the two lowest positive numbers.

// Examples
// sumTwoSmallestNums([19, 5, 42, 2, 77]) ➞ 7

// sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]) ➞ 3453455

// sumTwoSmallestNums([2, 9, 6, -1]) ➞ 8

// sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]) ➞ 563

// sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]) ➞ 4519
// Notes
// Don't count negative numbers.
// Floats and empty arrays will not be used in any of the test cases.
