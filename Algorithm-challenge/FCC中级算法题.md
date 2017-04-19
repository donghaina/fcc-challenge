### 2.Record Collection
严格来讲，这不是一道非常难的题，把题目要求看清楚，就能写出代码。
[原题链接](https://www.freecodecamp.com/challenges/record-collection)
**我对题目的翻译：**
  给你的是一个表示音乐专辑集合的一部分json对象，每一个专辑有几个属性和作为它的key的唯一的ID，不是所有的专辑都有完整的信息。

写一个函数，这个函数带有专辑的ID，一个属性和一个属性值，去改变这个集合，
- 如果属性不是tracks，并且值不为空，更新这个值到集合对应的属性
**注意**：你的函数需要返回集合对象
- 下面是一些处理不完整数据的规则
 1. 如果属性是tracks，但是集合没有tracks属性，在添加新值到专辑对应属性之前，创建一个空数组
 2. 如果属性是tracks和值不为空，添加数据到专辑已经存在的tracks数组末尾 
 3. 如果值是空，从专辑里删除被给的属性

代码方案如下：
```
function updateRecords(id, prop, value) {
    if (prop === 'tracks' && value !== '') {
        if (collectionCopy[id][prop]) {    //判断集合是否有这个属性
            collectionCopy[id][prop].push(value);    //有的话，直接push到末尾
        } else {    //没有的话创建一个新的数组，将数组赋值给属性prop。
            var arr = [];
            arr.push(value);
            collectionCopy[id][prop] = arr;
        }
    } else if (value === '') {    //值为空时候，删除这个属性
        delete collectionCopy[id][prop];
    } else {    //值不为空，属性也不是track，将值赋给属性
        collectionCopy[id][prop] = value;
    }
    return collectionCopy;
}
```
### 3.Symmetric Difference
这道题考察的是咱们的高中数学知识，但我把名词忘了，但是不要紧，我们知道这道题的重点就是不断去重，A和B去重，得到的结果和C去重，依次类推。
```
function sym(args) {
    //前半段得到参数数组，后半段使用 Set 集合得到去重的参数数组）
    var newArgs = Array.prototype.slice.call(arguments).map(function(item) {
        return Array.from(new Set(item));
    });;

    // 封装方法——得到2个数组去重之后的数组
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
        /*return newArr.filter(function(item) {
            return item !== '';
        });*/
        return newArr.filter(Boolean);//这里可以优化一下
    }

    // 遍历参数数组，得到最终的去重数组
    for (var i = 0; i < newArgs.length-1; i++) {
        newArgs[i+1]= diff(newArgs[i],newArgs[i+1]);
    }
    return newArgs[newArgs.length-1];
}
```