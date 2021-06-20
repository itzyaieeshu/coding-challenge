const getDays = require('../../hard/005differenceInDays');

test('getDays(new Date("June 14, 2019"), new Date("June 20, 2019")) should returns 6', () => {
  expect(getDays(
    new Date('June 14, 2019'),
    new Date('June 20, 2019'),
  )).toEqual(6);
});

test('expect(getDays(new Date("December 29, 2018"), new Date("January 1, 2019")) should returns 3', () => {
  expect(getDays(
    new Date('December 29, 2018'),
    new Date('January 1, 2019'),
  )).toEqual(3);
});
