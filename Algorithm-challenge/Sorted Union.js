
function uniteUnique(arr) {
	let args = Array.prototype.slice.call(arguments); 
	var result = args.reduce(function(pre,cur){
		return pre.concat(cur);
	});
	// var newarr = args.join(',').split(',');
	/*var result = newarr.reduce(function(flat,toFlatten){
		return flat.concat(Array.isArray(toFlatten)?flatten(toFlatten):toFlatten);
	},[]);
 	
	var result2 = newarr.map(function(item){
 	 	return parseInt(item);
	});*/
	return Array.from(new Set(result));
	// return result;

}

console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));
