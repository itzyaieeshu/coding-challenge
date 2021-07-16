const replaceVowel = require('../../medium/010replaceVowels');

test('replaceVowel("chembur") returns "28"', () => {
    expect(replaceVowel("chembur")).toBe('ch2mb5r');
});

test('replaceVowel("khandbario") returns "kh1ndb1r34"', () => {
    expect(replaceVowel("khandbario")).toBe('kh1ndb1r34');
});
