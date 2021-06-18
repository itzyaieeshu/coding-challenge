const leftRotations = (str) => {
  const result = [str];
  let rotation = str;
  for (let i = 0; i < str.length - 1; i++) {
    rotation = rotation.slice(1) + rotation.charAt(0);
    result.push(rotation);
  }
  return result;
};
const rightRotations = (str) => {
  const result = [str];
  let rotation = str;
  for (let i = 0; i < str.length - 1; i++) {
    rotation = rotation.charAt(str.length - 1) + rotation.slice(0, -1);
    result.push(rotation);
  }
  return result;
};

module.exports = {
  leftRotations,
  rightRotations,
};

// All Rotations of a String
// Create a left rotation and a right rotation function that returns all the left rotations and right rotations of a string.

// Examples
// leftRotations("abc") ➞ ["abc", "bca", "cab"]

// rightRotations("abc") ➞ ["abc", "cab", "bca"]

// leftRotations("abcdef")
// ➞ ["abcdef", "bcdefa", "cdefab", "defabc", "efabcd", "fabcde"]

// rightRotations("abcdef")
// ➞ ["abcdef", "fabcde", "efabcd", "defabc", "cdefab", "bcdefa"]
