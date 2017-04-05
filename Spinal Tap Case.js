function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  // var regExp = /[A-Za-z]/g;
  var arr = str.replace(/[^A-Za-z]/g,' ').split('').map(function(item){
  	return item.match(/[A-Z]/g)?" "+item:item;
  });
  // var result = arr.filter(function(item){
  // 	return item.match(regExp);
  // });
  
  // // return arr;
  // return result.join('').trim().replace(/\s/g,'-');
  /*将所有的非字母字符转换成‘ ’*/
	// return str.replace(/[^A-Za-z]/g,' ');	//return AllThe-small-Things
	return arr.join('').toLowerCase().trim().replace(/[\s]+/g,'-');
}
console.log(spinalCase('The_Andy_Griffith_Show'));

/*function spinalCase(str) {
  var regExp = /[A-Za-z]/g;
  var arr = str.split('');
  var filterArr = arr.filter(function(item){
  	return item.match(regExp);
  });
  var result = filterArr.map(function(item){
  	return item.match(/[A-Z]/g)?" "+item.toLowerCase():item;
  });
  return result.join('').trim().replace(/\s/g,'-');
}

spinalCase('This Is Spinal Tap');*/