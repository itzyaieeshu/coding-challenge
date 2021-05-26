let convert = (input) => {
    let result
    if(input.charAt(input.length-1).toLowerCase() === 'c' ) {
        let value = input.toLowerCase().split("°c");
        let f = (Number(value[0]) * 9/5) + 32
        result = f.toString() + "°F"
    } else if (input.charAt(input.length-1).toLowerCase() === 'f' ) {
        let value = input.toLowerCase().split("°f");
        let c = Math.round(Number(value[0] - 32) * 5/9)
        result = c.toString() + "°C"  
    } else {
        result = "error"
    }
    return result
}