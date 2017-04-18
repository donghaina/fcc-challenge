function sym(args) {
    // 得到去重之后的参数数组
    var newArgs = Array.prototype.slice.call(arguments).map(function(item) {
        return Array.from(new Set(item));
    });;

    // 得到2个数组去重之后的数组
    function diff(arr1, arr2) {
    	// 连接两个数组，并给数组按照从小到大的顺序排序
        var newArr = arr1.concat(arr2).sort(function(a, b){
            return a - b;
        });

        // 新数组去重
        for (var i = 0; i < newArr.length; i++) {
            if (newArr[i] === newArr[i + 1]) {
                delete newArr[i];
                delete newArr[i + 1];
            }
        }
        // 过滤空元素
        return newArr.filter(function(item) {
            return item !== '';
        });
    }

    // 遍历参数数组，得到最终的去重数组
    for (var i = 0; i < newArgs.length-1; i++) {
    	newArgs[i+1]= diff(newArgs[i],newArgs[i+1]);
    }
    return newArgs[newArgs.length-1];
}
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
