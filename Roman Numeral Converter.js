function convertToRoman(num) {
	var arabNum = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
	var romanNum = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
	var romanNumed = '';
	for(var i=0; i<arabNum.length;i++){
		while(arabNum[i]<=num){
			romanNumed +=romanNum[i];
			num -= arabNum[i];
		}

	}
	return romanNumed;
}
console.log(convertToRoman(90));
