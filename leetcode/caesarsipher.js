function getAlphabet() {
    var values = [];
    for (let i = 65; i <= 90; i++) {
        values.push(String.fromCharCode(i));
    }
    return values;
}

function getShiftedChar(char, shift) {
    var alphabet = getAlphabet();
    var unicodeValue = char.charCodeAt(0);
    var newUnicode = unicodeValue + shift;
    while (newUnicode > 90) {
        newUnicode -= 26;
    }
    return alphabet[newUnicode-65];
}

function rot13(str) { 
    var result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/\W/)) result += str[i];

        else {
            result += getShiftedChar(str[i], 13);
        }
    }
    return result;
}

console.log(getShiftedChar("A", 2));
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));