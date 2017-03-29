FCC算法题

第一道：反转字符串
```Javascript
var arr = "Webkit Moz O ms Khtml".split( "" );

console.log(arr.reverse().join(''));

function reverseString(str) {
  var arr = str.split('');
  str = arr.reverse().join('');
  return str;
}

function reverseString(str) {
  return str.split('').reverse().join('');
  
}

reverseString("hello"); 
```
第二道：阶乘
最初我把total放在了for循环里边，一直过不了，看了别人的答案才恍然大悟。
```Javascript
function factorialize(num) {
  var i = 1;
  var total = 1;
  for (i = 1; i <= num; i++) {
        total *= i;
    
  }
  return total;
}
console.log(factorialize(5));
```
第三道算法题：
```
function palindrome(str) {
  var re = /[^a-zA-Z1-9]/gi;//匹配所有和要求的字符
  str = str.toLowerCase();//将字符串转换为小写
  str = str.replace(re,'');
  var newstr = str.split('').reverse().join('');
  return str===newstr;
  
}
palindrome("eye");
```

```
function findLongestWord(str) {
  //str.split('');
   arr = str.split(' ');
    var newarr;
   // var arr1 =[];
  //将句子分割成字符串
  //遍历句子，将句子的长度值存到一个数组中
  //对数组排序
   //return str.split(' ');
  for(var i=0; i<arr.length;i++){
  
  newarr = arr.map(function(val){
     return val.length;
   }).sort(function(a,b){
    return b-a;
  });
  }
  return newarr[0];
}

findLongestWord("The quick brown fox jumped over the lazy dog");
```

将每个单词的首字母大写
```
function titleCase(str) {
 var newstr = str.toLowerCase().split(' ').map(function(val){
   return val[0].toString().toUpperCase()+val.slice(1);
 }).join(' ');
 return newstr;
}

titleCase("I'm a little tea pot");
```

找出二维数组最大的数
```
function largestOfFour(arr) {
  // You can do this!
  var newarr = [];
  // You can do this!
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        newarr.push(arr[i][j]);
    }
  }
  newarr.sort(function(a,b){
    return b-a;
  });
  return newarr[0];
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
```

```
function largestOfFour(arr) {
  // You can do this!
  var newarr = [];
  // You can do this!
  for (var i = 0; i < arr.length; i++) {
    arr[i].sort(function(a,b){
    return b-a;
  });
    newarr.push(arr[i][0]);
  }
 
  return newarr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
```

```
function confirmEnding(str, target) {
  var newstr = str.substring(str.length-target.length);
  return newstr===target;
}

confirmEnding("Bastian", "n");
```

```
function repeatStringNumTimes(str, num) {
  var newstr;
  if(num<0){
    return "";
  }else{
    return str.repeat(num);
  }
  
}

repeatStringNumTimes("abc", 3);
```

```
function truncateString(str, num) {
  if(str.length<=num){
    return str;
  }else{
    return str.slice(0,(num>3?num-3:num))+'...';
  }
  
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
```