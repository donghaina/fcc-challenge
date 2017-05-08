window.onload = function() {
    var workT;
    var breakT;
    var workTime = document.getElementById('workTime');
    var addWork = document.getElementById('addWork');
    var minusWork = document.getElementById('minusWork');
    var breakTime = document.getElementById('breakTime');
    var addBreak = document.getElementById('addBreak');
    var minusBreak = document.getElementById('minusBreak');
    var start = document.getElementById('start');
    var pause = document.getElementById('pause');
    var restart = document.getElementById('restart');

    workT = parseInt(workTime.textContent);
    /*减少番茄钟时间*/
    minusWork.addEventListener('click', function() {
        if (workT > 0) {
            workT -= 5;
            workTime.innerHTML = workT;
        }
    });

    /*增加番茄钟时间*/
    addWork.addEventListener('click', function() {
        workT += 5;
        workTime.innerHTML = workT;
    });

    /*减少休息时间*/
    breakT = parseInt(breakTime.textContent);
    minusBreak.addEventListener('click', function() {
        if (breakT > 0) {
            breakT -= 1;
            breakTime.innerHTML = breakT;
        }
    });

    /*增加休息时间*/
    addBreak.addEventListener('click', function() {
        breakT += 1;
        breakTime.innerHTML = breakT;
    });

    /* 番茄钟重置 */
    restart.addEventListener('click', function() {
        workTime.innerHTML = 25;
        breakTime.innerHTML = 5;
    });
    /* 番茄钟工作 */
    start.addEventListener('click', function() {
        workT = parseInt(workTime.textContent);
        var total = workT * 60;
        var setTimer = setInterval(myClock, 1000);
        pause.addEventListener('click', function() {
            clearInterval(setTimer);
        });

        /*番茄钟执行过程*/
        function myClock() {
            total -= 1;
            if (total === 0) {
                var r = confirm("休息吗");
                if (r === true) {
                    breakT = parseInt(breakTime.textContent);
                    total = breakT * 60;
                } else {
                    clearInterval(setTimer);
                }
            }
            var remainTime = document.getElementById('inner-box');
            var mins = Math.floor(total / 60);
            if (mins < 10) {
                mins = "0" + mins;
            }
            var secs = total % 60;
            if (secs < 10) {
                secs = "0" + secs;
            }
            remainTime.innerHTML = mins + " : " + secs;
        }
    });
}
