/*
设计一个找零的函数：
第一个参数是价格（price），
第二个参数是现金（cash），
第三个参数（cid）是抽屉里的现金
当抽屉里的钱比 change due 少的时候，返回“Insufficient Funds”
当抽屉里的钱和 change due 一样的时候交易关闭
否则，返回零钱数coin and bills ，从高到低
*/

var keyVals = [
    { name: 'ONE HUNDRED', value: 100 },
    { name: 'TWENTY', value: 20 },
    { name: 'TEN', value: 10 },
    { name: 'FIVE', value: 5 },
    { name: 'ONE', value: 1 },
    { name: 'QUARTER', value: 0.25 },
    { name: 'DIME', value: 0.10 },
    { name: 'NICKEL', value: 0.05 }, 
    { name: 'PENNY', value: 0.01 }
];

function checkCashRegister(price, cash, cid) {
    var change = cash - price;
    var totalCid = cid.reduce(function(acc, curr) {
        return acc + curr[1];
    }, 0);

    if (change < totalCid) {
        return "Insufficient Founds";
    } else if (change === totalCid) {
        return "Closed";
    }

    cid = cid.reverse();
    var result = keyVals.reduce(function(acc, curr, index) {
        if (change >= curr.value) {
            var currentValue = 0.0;
            while (change >= curr.value && cid[index][1] >= curr.value) {
                currentValue += curr.value;
                change -= curr.value;
                change = Math.round(change * 100) / 100;
                cid[index][1] -= curr.value;
            }
            acc.push([curr.name, currentValue]);
            return acc;
        } else {
            return acc;
        }
    }, []);
    return result.length > 0 && change === 0 ? result : "Insufficient Founds";
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

console.log(checkCashRegister(19.50, 20.00, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.10],
    ["QUARTER", 4.25],
    ["ONE", 90.00],
    ["FIVE", 55.00],
    ["TEN", 20.00],
    ["TWENTY", 60.00],
    ["ONE HUNDRED", 100.00]
]));
