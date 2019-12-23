function telephoneCheck(str) {
    if (!lengthCheck(str)) { console.log(str + " failed length check"); return false };
    if (!countryCodeCheck(str)) { console.log(str + " failed country code check"); return false };
    if (!startsWithNumOrParentheses(str)) { console.log(str + " failed start with num or parentheses check"); return false };
    if (!parenthesesGroupingCheck(str)) { console.log(str + " failed parentheses grouping check"); return false };
    return true;
}

function parenthesesGroupingCheck(str) {
    var openIndex = str.indexOf("(");
    if (openIndex > -1) {
        if (str[openIndex + 4] != ")") return false;
    }
    var closeIndex = str.indexOf(")");
    if (closeIndex > -1) {
        if (closeIndex < 4) return false;
        if (str[closeIndex - 4] != "(") return false;
    }
    return true;
}

function countryCodeCheck(str) {
    var result = stripAllowedNonAlphaNumericChars(str);
    if (result.length > 10 && result[0] != "1") return false;
    return true;
}

function startsWithNumOrParentheses(str) {
    if (!(str.match(/^[0-9|\(]/))) return false;
    return true;
}

function lengthCheck(str) {
    var stripped = stripAllowedNonAlphaNumericChars(str);
    //console.log(stripped + " length: " + stripped.length);
    if (stripped.length < 10 || stripped.length > 11) return false;
    return true;
}

function stripAllowedNonAlphaNumericChars(str) {
    return str
        .replace(/\-/g, "")
        .replace(/[\(\)]/g, "")
		.replace(/\s/g, "")
}

telephoneCheck("(555)555-5555")
telephoneCheck("555-555-5555");
telephoneCheck("555-555-5555"); 
telephoneCheck("1 555-555-5555");
telephoneCheck("1 (555) 555-5555");
telephoneCheck("5555555555");
telephoneCheck("555-555-5555");
telephoneCheck("(555)555-5555");
telephoneCheck("1(555)555-5555");
telephoneCheck("555-5555");
telephoneCheck("5555555");
telephoneCheck("1 555)555-5555");
telephoneCheck("1 555 555 5555");
telephoneCheck("1 456 789 4444");
telephoneCheck("123**&!!asdf#");
telephoneCheck("55555555");
telephoneCheck("(6054756961)");