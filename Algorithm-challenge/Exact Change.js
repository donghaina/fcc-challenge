/*
设计一个找零的函数：
第一个参数是价格（price），
第二个参数是现金（cash），
第三个参数（cid）是抽屉里的现金
当抽屉里的钱比 change due 少的时候，返回“Insufficient Funds”
当抽屉里的钱和 change due 一样的时候交易关闭
否则，返回零钱数coin and bills ，从高到低
*/

function checkCashRegister(price, cash, cid) {
  var change;
  // Here is your change, ma'am.
  return change;
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

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);