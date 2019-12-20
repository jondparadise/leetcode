/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    var sNum = x.toString();
    const sReversed = sNum.split('').reverse().join('');
    var newNum = parseInt(sReversed);
    if(newNum > Math.pow(2, 31)) return 0;
    return Math.sign(x) * newNum;
};