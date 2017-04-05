function translatePigLatin(str) {
	var pigLatin = "";
	var reg = /[aeiou]/gi;
	if(str[0].match(reg)){
		pigLatin = str + "way";
	}else{
		var vowelIndice = str.indexOf(str.match(reg)[0]);
		pigLatin = str.substr(vowelIndice)+str.substr(0,vowelIndice)+'ay';
	}
 	return pigLatin;
}

translatePigLatin("consonant");