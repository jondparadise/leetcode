/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    var sNum = x.toString();
    for (let i = 0; i < sNum.length / 2; i++) {
        if (sNum[i] != sNum[sNum.length - 1 - i]) return false;
    }
    return true;
};