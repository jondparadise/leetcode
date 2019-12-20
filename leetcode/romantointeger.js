/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    var values = {
        "I": 1,
        "IV": 4,
        "V": 5,
        "IX": 9,
        "X": 10,
        "XL": 40,
        "L": 50,
        "XC": 90,
        "C": 100,
        "CD": 400,
        "D": 500,
        "CM": 900,
        "M": 1000
    }

    var total = 0;
    while (s.length > 0) {
        if (values[s.substring(s.length - 2)] != undefined) {
            total += values[s.substring(s.length - 2)];
            s = s.substring(0, s.length - 2);
        }
        else {
            total += values[s.substring(s.length - 1)];
            s = s.substring(0, s.length - 1);
        }
    }
    return total;
};