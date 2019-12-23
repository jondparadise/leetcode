var cashValues = {
    PENNY: .01,
    NICKEL: .05,
    DIME: .1,
    QUARTER: .25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100 
}

function cashInDrawerValue(cid) {
    var total = 0;
    for (let i = 0; i < cid.length; i++) {
        total += Number(cid[i][1]);
    }
    return total.toFixed(2);
}

function checkCashRegister(price, cash, cid) {
    var result = { status: undefined, change: [] }
    var cidValue = cashInDrawerValue(cid);
    var changeNeeded = (cash - price).toFixed(2);
    if (Number(changeNeeded) > Number(cidValue)) { result.status = "INSUFFICIENT_FUNDS"; console.log(result); return result; };
    if (changeNeeded == cidValue) { result.status = "CLOSED"; result.change = cid; console.log(result); return result; };

    for (let i = cid.length - 1; i >= 0; i--) {
        var coinName = cid[i][0];
        var coinValue = cashValues[coinName];
        var totalCoinsAvailable = cid[i][1] / coinValue;
        var numCoinsUsed = 0;

        while (changeNeeded >= coinValue && totalCoinsAvailable > 0) {
            changeNeeded -= coinValue;
            changeNeeded = changeNeeded.toFixed(2);
            numCoinsUsed++;
            totalCoinsAvailable--;
        }

        if (numCoinsUsed > 0) {
            result.change.push([coinName, (coinValue * numCoinsUsed)]);
        }
    }

    if (changeNeeded == 0) {
        result.status = "OPEN";
    }
    else {
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
    }

    console.log(result);
    return result;
}


// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

/*checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])*/
//checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])