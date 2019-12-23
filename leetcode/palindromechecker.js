function palindrome(str) {
    str = str.toLowerCase();
    str = str
        .replace(/[^\w]/g, "")
        .replace(/_/g, "")
        .toLowerCase();
    console.log(str);
    var half = str.length / 2;
    for (let i = 0; i < half; i++) {
        if (str[i] !== str[str.length - 1 - i]) return false;
    }
    return true;
}

console.log(palindrome("eye"));
