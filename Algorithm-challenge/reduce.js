// var orders = [
// {amount:100},
// {amount:200},
// {amount:300},
// {amount:400}
// ];

/*var totalAmount = orders.reduce(function(acc,item){
	console.log("acc:"+acc+" item:"+item.amount);
	return item.amount + acc; 
},0);*/

/*使用箭头函数的方式reduce*/
// var totalAmount = orders.reduce((acc,item) => acc+item.amount,0);

// console.log(totalAmount);

// 数组扁平化
/*var arr = [[2,3],[7,9],[67,34],[1,9]];
var flatten = arr.reduce(function(a,b){
	return a.concat(b);
})
var flatten = arr.reduce((a,b)=>a.concat(b),[]);
console.log(flatten);*/

/*var names = ['Alice','Bob','Dack','Bruce','Alice','Candy','Bob','Alice'];
var counter = names.reduce(function(allNames,name){
	if(name in allNames){
		allNames[name]++;
	}else{
		allNames[name]=1;
	}
	return allNames;
},{});

console.log(counter);*/


