const longest7SegmentWord = require('../../hard/008longestWord7SegmentDisplay');

test('longest7SegmentWord(["coding", "crackers", "edabit", "celebration"]) should returns "celebration"', () => {
  expect(longest7SegmentWord(['coding', 'crackers', 'edabit', 'celebration'])).toBe('celebration');
});

test('longest7SegmentWord(["velocity", "mackerel", "woven", "kingsmen"]) should returns ""', () => {
  expect(longest7SegmentWord(['velocity', 'mackerel', 'woven', 'kingsmen'])).toBe('');
});
