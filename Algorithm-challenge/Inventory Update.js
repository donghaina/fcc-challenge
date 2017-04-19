/*
比较和更新二维阵列中存储的库存数量与第二个新数据的二维数组。 
更新当前现有库存料品数量（在arr1中）。
如果找不到项目，请将新项目和数量添加到库存数组中。 
返回的库存数组应按字母顺序排列。
*/

function updateInventory(arr1, arr2) {
	var curInvObj = {};
	var newInvObj = {};
	// 将数组转换为对象
    function arrToObj(arr,obj){
    	for (var i = 0; i < arr.length; i++) {
    		obj[arr[i][1]] = arr[i][0];
    	}
    }
    // 构造库存对象
    arrToObj(arr1,curInvObj);
    arrToObj(arr2,newInvObj);

    for(i in newInvObj){
    	// console.log(curInvObj.hasOwnProperty(i));
    	// 判断当前的库存对象中是否有新的库存对象的属性，有的话，则对应的属性想嫁，没有的话，添加这个属性并赋值
    	if (curInvObj.hasOwnProperty(i)) {	
    		curInvObj[i]+=newInvObj[i];
    	} else {
    		curInvObj[i]=newInvObj[i];
    	}
    }

    // 使用key给库存对象排序
    function objKeySort(obj){
    	var newKey = Object.keys(obj).sort();
    	var newObj = {};
    	for(var i=0;i<newKey.length;i++){
    		newObj[newKey[i]] = obj[newKey[i]];
    	} 
    	return newObj;
    }
    curInvObj = objKeySort(curInvObj);

    // 将排序后的对象转为数组
    var newArr = [];
    for(i in curInvObj){
    	newArr.push([curInvObj[i],i]);
    }
    // console.log(newArr);
    return newArr;
}

var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
