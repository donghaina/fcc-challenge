$(document).ready(function(){
    var hbPlayer = false;;
    var pcPlayer = true;
    var hbVal;
    var pcVal; 
    $('#ex').click(function(){
        /* 先手 */
        hbVal = 'X';
        pcVal = 'O';
        $('#dialog').hide();
    });

    $('#oh').click(function(){
        /* 后手 */
        hbVal = 'O';
        pcVal = 'X';
        $('#dialog').hide();
    })
    $('td').click(function(){
        //jQuery获取点击的格子的Id
        var val = $(this).attr('id');
        alert(val);
        console.log(val.substr(5,1)+val.substr(7,1));
    });
});
