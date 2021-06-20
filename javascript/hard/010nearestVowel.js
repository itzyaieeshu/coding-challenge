const nearestVowel = (char) => {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  if (char.match(/[aeiou]/)) {
    return char;
  }
  const closest = [0, 4, 8, 14, 20].reduce((a, b) => (Math.abs(b - alphabet.indexOf(char)) < Math.abs(a - alphabet.indexOf(char)) ? b : a));
  return alphabet[closest];
};
module.exports = nearestVowel;
// Nearest Vowel
// Given a letter, created a function which returns the nearest vowel to the letter. If two vowels are equidistant to the given letter, return the earlier vowel.

// Examples
// nearestVowel("b") ➞ "a"

// nearestVowel("s") ➞ "u"

// nearestVowel("c") ➞ "a"

// nearestVowel("i") ➞ "i"
// Notes
// All letters will be given in lowercase.
// There will be no alphabet wrapping involved, meaning the closest vowel to "z" should return "u", not "a".
