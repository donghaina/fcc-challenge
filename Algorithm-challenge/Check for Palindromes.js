function palindrome(str) {
    var re = /[^a-zA-Z1-9]/gi; //匹配所有非字母和数字的字符
    str = str.toLowerCase(); //将字符串转换为小写
    str = str.replace(re, ''); //用正则表达式将所有的非字母和数字移除
    var newstr = str.split('').reverse().join(''); //翻转字符串并赋给新的字符串
    return str === newstr; //比较新字符串和旧字符串是否一样
}
console.log(palindrome("eye"));