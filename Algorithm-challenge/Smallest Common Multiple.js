function smallestCommons(arr) {
	/*得到一个两数之间的所有数的数组*/
	var sortArr = arr.sort(function(a,b){
		return a-b;
	});
	var min = sortArr[0];
	var max = sortArr[1];
	var targetArr = [];
	for(var i=min;i<=max;i++){
		targetArr.push(i);
	}

	/*求两个数的最小公倍数*/
	function gcd(a,b){
		var minNum = Math.min(a,b),maxNum = Math.max(a,b),i=Math.floor(maxNum/minNum),vper=0;
		if(a ===0 || b===0){
			return maxNum;
		}
		for(;i<=maxNum;i++){
			vper = minNum * i;
			if(vper % maxNum === 0){
				return vper;
				break;
			}
		}
	}
	/*求一个数组的最小公倍数*/
	function gcds(arr){
		var onum = 0,i = 0,len = arr.length,midNum = 0;
		for(;i<len;i++){
			onum = Math.floor(arr[i]);//去掉小数
			midNum = gcd(midNum,onum);
		}
		return midNum;
	}

	return gcds(targetArr);
}


console.log(smallestCommons([5,1]));