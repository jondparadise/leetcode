function addTogether() {
    for (let i = 0; i < arguments.length; i++) {
        if (!(Number(arguments[i]) === arguments[i])) {
            return undefined;
        }
    }

    if (arguments.length > 1) {
        var total = 0;
        for (let i = 0; i < arguments.length; i++) {
            total += arguments[i];
        }
        return total;
    }
    else {
        var first = arguments[0];
        return function (num) {
            if (!(Number(num) === num)) return undefined;
            return first + num;
        };
    }
}

console.log(addTogether(2, 3));
console.log(addTogether(2)(3));
