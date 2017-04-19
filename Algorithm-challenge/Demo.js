function addTogether(){
  var args = Array.prototype.slice.call(arguments);

  // var result = args.some(function(item){
  //   	return Number.isNaN(item);
  //   });
  // return result;
  return Number.isNaN(args[0]);
}


console.log(addTogether("http://bit.ly/IqT6zt"));