function sumPrimes(num) {
  	var i,j,k;
  	var arr = [];
  	/*创建一个num以内整数的数组*/
  	for(i=2; i<=num; i++){
  		arr.push(i);
  	}

  	/*得到质数*/
  	for(j=0;j<arr.length;j++){
  		for(k=2;k<arr[j];k++){
  			if(arr[j] % k ===0){
  				arr.splice(j,1);
  				j=2;
  			}
  		}

  	}

  	/*求和*/
  	var result = arr.reduce(function(prev,cur){
  		return prev+cur;
  	});
  	return result;
 	
}

console.log(sumPrimes(10));
