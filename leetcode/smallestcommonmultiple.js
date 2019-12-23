function smallestCommons(arr) {
    var sorted = arr.sort(function (a, b) { return (a > b) ? 1 : -1 })
    var primeFactors = [];
    var primes = getPrimes(sorted[sorted.length - 1]);
    //console.log("Eligible primes: " + primes);
    for (let i = sorted[0]; i <= sorted[sorted.length - 1]; i++) {
        var primeFactorSet = getPrimeFactors(i, primes);
        //console.log("Prime factor set for " + i + ": " + primeFactorSet);
        primeFactors.push(primeFactorSet);
    }

    var result = 1;
    for (let i = 0; i < primes.length; i++) {
        var multiple = Math.pow(primes[i], mostCommonOccurenceOfPrime(primeFactors, primes[i]));
        result *= multiple;
    }
    //console.log("Result: " + result);
    return result;

    //console.log("Prime Factors: " + primeFactors);
}

function mostCommonOccurenceOfPrime(arraySet, prime) {
    var maxCount = 0;
    for (let i = 0; i < arraySet.length; i++) {
        var setCount = 0;
        for (let j = 0; j < arraySet[i].length; j++) {
            if (arraySet[i][j] == prime) setCount++;
        }
        if (setCount > maxCount) maxCount = setCount;
    }
    //console.log("Found " + maxCount + " " + prime + "s");
    return maxCount;
}

function getPrimeFactors(num, primes) {
    var primeFactorSet = [];
    var remaining = num;
    //console.log("start with: " + remaining)
    for (let j = 0; j < primes.length; j++) {
        if (remaining % primes[j] == 0) {
           // console.log("found prime factor: " + primes[j]);
            primeFactorSet.push(primes[j]);
            remaining = remaining / primes[j];
            j = -1;
            //console.log("removed prime factor of " + primes[j] + " remaining: " + remaining);
        }
    }
    //console.log("done with: " + num);
    //console.log("prime factor set: " + primeFactorSet)
    return primeFactorSet;
}



function getPrimes(num) {
    var primeNums = [2];
    for (let i = 3; i <= num; i += 2) {
        var isPrime = true;
        for (let j = 0; j < primeNums.length; j++) {

            if (i % primeNums[j] == 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            primeNums.push(i);
        }
    }
    return primeNums;
}


smallestCommons([2, 10]);