/*用foreach实现
var arr = [1,2,3,4];
sum = 0;
arr.forEach(function(val) {
	sum+=val;
});
console.log(sum);
*/

/*用map实现
var arr = [1,2,3,4];
sum = 0;
arr.map(function(val){
	sum+=val;
});
console.log(sum);
*/

function reduceDemo(arr){
	var arr = [1,2,3,4];
	arr.reduce(function(pre,cur){
	return pre+cur;
});
}
console.log(reduceDemo());
