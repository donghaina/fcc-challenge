window.onload = function() {
    
    //  获取屏幕数值
    var answer = document.getElementById('answer');
    //  获取数字
    var num = document.getElementsByClassName('num');
    // 获取退格键
    var del = document.getElementById('del');
    // 获取清除键
    var ac = document.getElementById('ac');
    // 获取等号
    var eq = document.getElementById('eq');
    var nums = [];
    for (var i = 0; i < num.length; i++) {
        num[i].addEventListener('click', function() {
            // if(answer.value.indexof('.')!==-1){
            //     if(this.value!=='.'){
            //         nums.push(this.value);
            //     }else{
            //         nums.push('');
            //     }
            //     // 不能连续输入点
            // }else{
                // 数组中没有点存在时，直接拼接
                nums.push(this.value);
            // }
            // if(answer.value)
           
            answer.value = nums.join('');
            console.log(answer.value);
        });
    }
    ac.addEventListener('click',function(){
        answer.value = '0';
        nums = [];
        console.log(answer.value);
    })
    del.addEventListener('click',function(){
        nums.slice(nums.length-1);
        answer.value = answer.value.substr(0,answer.value.length-1);
        console.log(answer.value);
    })

    eq.addEventListener('click',function(){
        answer.value = eval(answer.value);
        nums = [];
    });
}
