var romanValues = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
}

function convertToRoman(num) {
    var result = "";
    while (num > 0) {
        var largest = largestBaseValue(num);
        var repeat = Math.floor(num / largest);
        for (let i = 0; i < repeat; i++) {
            result += romanValues[largest];
        }
        num = num % largest;
    }
    console.log(result);
    return result;
}

function largestBaseValue(num) {
    var keys = Object.keys(romanValues);
    for (let i = keys.length - 1; i >= 0; i--) {
        if (Number(keys[i]) <= num) {
            return Number(keys[i]);
        }
    }
}

convertToRoman(36);
