function add() {
	let args = Array.prototype.slice.call(arguments); 
	return args;
	if(args.length===2){
		if(Number.isFinite(args[0]) && Number.isFinite(args[1])){
			return args[0]+args[1];
		}else{
			return undefined;
		}
	}else{
		var a = args[0];
		if(Number.isFinite(b){
			return function(b){
				if(Number.isFinite(b)){
					return a+b;
				}else{
					return undefined;
				}
				
		}else{
			return undefined;
		}
	}
	

}

console.log(add(2,3);