/*
将小于此数的所用数用for循环遍历，相乘
*/
function factorialize(num) {
    var i = 1;
    var total = 1;
    for (i = 1; i <= num; i++) {
        total *= i;
    }
    return total;
}

console.log(factorialize(5));
