function binaryAgent(str) {
    var bytes = str.split(" ");
    var result = "";
    for (let i = 0; i < bytes.length; i++) {
        //console.log(binaryStringToNum(bytes[i]));
        result += String.fromCharCode(binaryStringToNum(bytes[i]));
    }
    return result;
}

function binaryStringToNum(str) {
    var result = 0;
    for (let i = str.length - 1; i > 0; i--) {
        if (str[i] == "1") {
            result += Math.pow(2, str.length - 1 - i);
        }
    }
    return result;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
