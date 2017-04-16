/*
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
*/
function telephoneCheck(str) {
  // var newstr = str.replace(/[\(\)\s-]+/g,'');
  var strlen = str.match(/[0-9]/g).length;
  if(strlen===10||strlen===11){
  	var reg = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
	return reg.test(str);
  }else{
  	return false;
  }
}
console.log(telephoneCheck("27576227382"));