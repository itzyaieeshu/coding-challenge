const replaceVowel = (str) => {
  const arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'a') {
      arr.splice(i, 1, '1');
    } else if (arr[i] === 'e') {
      arr.splice(i, 1, '2');
    } else if (arr[i] === 'i') {
      arr.splice(i, 1, '3');
    } else if (arr[i] === 'o') {
      arr.splice(i, 1, '4');
    } else if (arr[i] === 'u') {
      arr.splice(i, 1, '5');
    }
  }
  return arr.join('');
};

module.exports = replaceVowel;
// Replace Vowel with Another Character
// Create a function that takes a string and replaces the vowels with another character.

// a = 1
// e = 2
// i = 3
// o = 4
// u = 5
// Examples
// replaceVowel("karachi") ➞ "k1r1ch3"

// replaceVowel("chembur") ➞ "ch2mb5r"

// replaceVowel("khandbari") ➞ "kh1ndb1r3"
// Notes
// The input will always be in lowercase.