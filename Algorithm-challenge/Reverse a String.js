/*
1.分割数组
2.反转数组
3.将数组链接成字符串
*/
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello world,how are you?"));
