let sumMissingNumbers = (arr) => {
    let sum = 0
    for( let i = Math.min(...arr); i <= Math.max(...arr); i++ ){
        if (!arr.includes(i)) {
            sum += i
        }
    }
    console.log(sum)
}

// Sum of Missing Numbers
// Create a function that returns the sum of missing numbers from the given array.

// Examples
// sumMissingNumbers([4, 3, 8, 1, 2]) ➞ 18
// // 5 + 6 + 7 = 18

// sumMissingNumbers([17, 16, 15, 10, 11, 12]) ➞ 27
// // 13 + 14 = 27

// sumMissingNumbers([1, 2, 3, 4, 5]) ➞ 0
// // No Missing Numbers (i.e. all numbers in [1, 5] are present in the list)
// Notes
// The numerical range to consider when searching for the missing numbers in the array is the sequence of consecutive numbers between the minimum and maximum of the numbers (inclusive).