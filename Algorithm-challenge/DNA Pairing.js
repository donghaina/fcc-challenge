function pairElement(str){
	var arr = [];
	var map ={
		C: "G",
		G: "C",
		A: "T",
		T: "A"
	};
	arr = str.split('');
	for(var i=0; i<arr.length; i++){
		arr[i] = [arr[i],map[arr[i]]]; 
		
	}
	return arr;
}	
console.log(pairElement("TTGAG"));