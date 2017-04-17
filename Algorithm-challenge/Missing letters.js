function fearNotLetter(str) {
  var missing;
  var numArr = [];
  for (var i = 0; i < str.length; i++) {
	numArr.push(str.charCodeAt(i));
  }
  
  for (var j = 0; j < numArr.length; j++) {
	if(numArr[j+1]-1 != numArr[j]){
		missing =  String.fromCharCode(numArr[j+1]-1);
        return missing;
	}
  }
  return undefined;

}
console.log(fearNotLetter("abde"));