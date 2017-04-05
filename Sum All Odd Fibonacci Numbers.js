function sumFibs(num) {
	var arr = [1,1];
	var numa, numb, result, sum;
	numa=numb=1;
	/*生产斐波那契数列*/
	for(var i=3; i<=num; i++){
		result = numa + numb;
		numa = numb;
		numb = result;
		if(result<=num){
			arr.push(result);
		}
	}
	/*提取奇数*/
	var filterResult = arr.filter(function(item){
		return item%2===1;
	});
	/*奇数求和*/
	sum = filterResult.reduce(function(prev,cur){
		return prev + cur;
	});

	return sum;
	// return filterResult;
}

// console.log(sumFibs(75024));	//[ 1, 1, 3, 5, 13, 21, 55, 89, 233, 377, 987, 1597, 4181, 6765, 17711, 28657 ]
console.log(sumFibs(75025));	//[ 1, 1, 3, 5, 13, 21, 55, 89, 233, 377, 987, 1597, 4181, 6765, 17711, 28657 ]