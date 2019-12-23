function orbitalPeriod(arr) {
    var results = [];
    for (let i = 0; i < arr.length; i++) {
        var result = new Result(arr[i]["name"], arr[i]["avgAlt"]);
        //console.log(result);
        results.push(result);
    }
    return results;
}

function calculateOrbitalPeriod(avgAlt) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    var result = (2 * Math.PI) * Math.pow((Math.pow(avgAlt + earthRadius, 3) / GM), .5);
    return Math.round(result);
}

var Result = function(name, averageAltitude) {
    this.name = name;
    this.orbitalPeriod = calculateOrbitalPeriod(averageAltitude);
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
