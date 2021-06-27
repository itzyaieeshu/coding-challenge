const addName = require('../../medium/003stolenPet');

test('addName({}, "Brutus", 300) returns "{ Brutus: 300 }"', () => {
    expect(addName({}, "Brutus", 300)).toEqual({ Brutus: 300 });
});

test('addName({ piano: 500, stereo: 300 }, "Caligula", 440) returns "{ piano: 500, stereo: 300, Caligula: 440 }"', () => {
    expect(addName({ piano: 500, stereo: 300 }, "Caligula", 440)).toEqual({ piano: 500, stereo: 300, Caligula: 440 });
});
