function findElement(arr, func) {
  var num = arr.filter(function(item){
  	return item%2===0;
  });
  return num;
}

console.log(findElement([1, 3, 5, 9], function(num){ return num % 2 === 0; }));
