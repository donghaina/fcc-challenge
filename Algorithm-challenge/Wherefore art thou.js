function whatIsInAName(collection,source) {
	/*
	1.将source的key拿出来放在一个数组中
	2.遍历集合
	*/
	var srcKeys = Object.keys(source);
	var filteredCollection = collection.filter(function(item){
		return srcKeys.every(function(key){return item.hasOwnProperty(key)&&item[key] === source[key];
		});
	});
	
 	return filteredCollection;
}
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { first: "Tybalt", last: "Capulet" }));
