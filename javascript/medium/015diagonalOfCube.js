const cubeDiagonal = (volume) => Math.round(Math.cbrt(volume) * Math.sqrt(3) * 100) / 100;

module.exports = cubeDiagonal;

// Diagonal of a Cube
// Create a function that takes the volume of a cube and returns the length of the cube's main diagonal, rounded to two decimal places.

// Examples
// cubeDiagonal(8) ➞ 3.46

// cubeDiagonal(343) ➞ 12.12

// cubeDiagonal(1157.625) ➞ 18.19
// Notes
// N/A