const getBudgets = require('../../medium/014addBudget');

test('getBudgets([{ name: "John", age: 21, budget: 23000 },{ name: "Steve",  age: 32, budget: 40000 },{ name: "Martin",  age: 16, budget: 2700 }]) returns 65700', () => {
    expect(getBudgets([
          { name: "John", age: 21, budget: 23000 },
          { name: "Steve",  age: 32, budget: 40000 },
          { name: "Martin",  age: 16, budget: 2700 },
        ])).toEqual(65700);
});

test('getBudgets([{ name: "John",  age: 21, budget: 29000 },{ name: "Steve",  age: 32, budget: 32000 },{ name: "Martin",  age: 16, budget: 1600 }]) returns 62600', () => {
    expect(getBudgets([
          { name: "John",  age: 21, budget: 29000 },
          { name: "Steve",  age: 32, budget: 32000 },
          { name: "Martin",  age: 16, budget: 1600 },
        ])).toEqual(62600);
});

// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700

// getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ]) ➞ 62600