/*
返回没有重复连续字母的提供的字符串的总排列数。 
假设提供的字符串中的所有字符都是唯一的。

例如，aab应该返回2，因为它有6个总排列（aab，aab，aba，aba，baa，baa），
但只有2个（aba和aba）不具有相同的字母（在这种情况下为a） 重复
*/

function permAlone(str) {
  var arr = str.split('');
  var result = 0;
  function swap(a,b){
  	var temp = arr[a];
  	arr[a] = arr[b];
  	arr[b] = temp;
  }

  function generate(n){
  	var regex = /([a-z])\1+/;
  	if(n===1 && !regex.test(arr.join(''))){
  		result++;
  		// console.log(arr.join(''));
  	}else{
  		for(var i=0; i!==n; i++){
  			generate(n-1);
  			swap(n%2 ? 0 : i , n-1);
  		}
  	}
  }
  generate(arr.length);
  return result;
}

console.log(permAlone('aab'));