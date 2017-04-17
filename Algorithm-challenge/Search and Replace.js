function myReplace(str, before, after) {
	var beforeFirstLetter = before.substr(0,1);	//截取之前字符串的首位
	var newstr;
	var flag = 	/[A-Z]/.test(beforeFirstLetter);
	if(!flag){
		return str.replace(before,after);	
	}else{
		var afterFirstLetter = after.substr(0,1).toUpperCase();
		var sliced = after.split('').slice(1).join('');
		newafter = afterFirstLetter + sliced;
		return str.replace(before,newafter);
	}
}
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

