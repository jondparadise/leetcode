function steamrollArray(arr) {
    var result = [];

    function flatten(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (!(arr[i] instanceof Array)) {
                result.push(arr[i]);
            }
            else {
                flatten(arr[i]);
            }
        }
    }

    flatten(arr);

    return result;
}



console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));