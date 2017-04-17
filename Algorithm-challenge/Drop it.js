function dropElements(arr, func) {
  // Drop them elements.
  // var dropArr = arr.filter(func);
  // return arr;
  	var newarr;
  	for (var i = 0; i < arr.length; i++) {
  		if(func(arr[i])){
  			newarr = arr.slice(i);
  			return newarr;
  		}
  	}
  	if(newarr===undefined){
  		return [];
  	}
}
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));