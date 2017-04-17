function binaryAgent(str) {
  return str.split(' ').map(function(item){
  	return String.fromCharCode(parseInt(item,2));	//转换成十进制数，并找出十进制数对应的字母
  }).join('');	//将单词链接成字符串
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));