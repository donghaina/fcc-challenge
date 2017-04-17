function steamrollArray(arr) {
  	return arr.reduce(function(plane,toBeFlatten){
  		return plane.concat(Array.isArray(toBeFlatten)?steamrollArray(toBeFlatten):toBeFlatten);
  	},[]);
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));