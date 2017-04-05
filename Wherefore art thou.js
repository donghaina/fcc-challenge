function whatIsInAName(collection,source) {
	/*
	1.将source的key拿出来放在一个数组中
	2.遍历集合
	*/
	var arr = [];
	arr = Object.keys(source);
	for (var i = 0; i < arr.length; i++) {
		for(var j=0; j < collection.length; j++){
			if(collection[j].hasOwnProperty(arr[i]) && collection[j].arr[i]===collection[j]){

			}
		}
	}
  	// return arr;
}
// whatIsInAName({ last: "Capulet" });
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { "a": 1, "c": 2 }));
