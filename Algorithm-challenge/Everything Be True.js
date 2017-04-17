function every(collection, pre) {
  // Is everyone being true?
  var everyResult = collection.every(function(item){
  	return item.hasOwnProperty(pre) && Boolean(item[pre]);
  });
  return everyResult;
}

console.log(every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
