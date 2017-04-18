var orders = [
{amount:100},
{amount:200},
{amount:300},
{amount:400}
];

var totalAmount = orders.reduce(function(acc,item){
	console.log("acc:"+acc+" item:"+item.amount);
	return item.amount + acc; 
},0);

console.log(totalAmount);