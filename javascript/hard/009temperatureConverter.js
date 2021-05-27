const convert = (input) => {
  let result;
  if (input.charAt(input.length - 1).toLowerCase() === 'c') {
    const value = input.toLowerCase().split('°c');
    const f = (Number(value[0]) * (9 / 5)) + 32;
    result = `${f.toString()}°F`;
  } else if (input.charAt(input.length - 1).toLowerCase() === 'f') {
    const value = input.toLowerCase().split('°f');
    const c = Math.round(Number(value[0] - 32) * (5 / 9));
    result = `${c.toString()}°C`;
  } else {
    result = 'error';
  }
  return result;
};

// Temperature Converter
// Create a function that converts Celsius to Fahrenheit and vice versa.

// Examples
// convert("35°C") ➞ "95°F"

// convert("19°F") ➞ "-7°C"

// convert("33") ➞ "Error"
// Notes
// Round to the nearest integer.
// If the input is incorrect, return "Error".
// For the formulae to convert back and forth, check the Resources tab.
