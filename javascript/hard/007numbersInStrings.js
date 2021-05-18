let numInStr = (arr) => {
    for (i=0; i<=arr.length-1; i++) {
        if (!arr[i].match(/[0-9]/)) {
            arr.splice(i, 1)
        }
    }
    return arr
}

let numInStr = (arr) => {
    let num = "0123456789"
    let containsNumber = false
    for (let i=0; i<=arr.length-1; i++) {
        let str = arr[i]
        for (let j=0; j<=str.length-1; j++){
            if (num.includes(str.charAt(j))) {
                containsNumber = true
            }
        }
        if (!containsNumber) {
            arr.splice(i, 1)
        }
        containsNumber = false
    }
    return arr
}

// Numbers in Strings

// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.
// Examples

// numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

// numInStr(["abc", "abc10"]) ➞ ["abc10"]

// numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

// numInStr(["this is a test", "test1"]) ➞ ["test1"]

// Notes

//     The strings can contain white spaces or any type of characters.
//     Bonus: Try solving this without regex.