$(document).ready(function() {
    $btn = $('#btn');
    $btn.bind('click', function() {
        var searchText = $('#search').val();
        if (Boolean(searchText)) {
            // alert(searchText);
            var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchText + "&format=json&callback=?";
            console.log(api);
            $.getJSON(api, function(data) {
                // console.log(data[1].length);
                var len = data[1].length;
                for (var i = 0; i < len; i++) {
                    var $list = $("<div></div>"); //创建放搜索条目的盒子
                    var $list_title = "<h2><a href=\"" + data[3][i] + "\">" + data[1][i] + "</a></h2>"; //创建放文章title的H1元素
                    var $list_content = "<p>" + data[2][i] + "</p>"; //创建放文章摘要的p元素
                    $($list).append($list_title).append($list_content).addClass("list"); //将题目和文章摘要放到搜索条目盒子
                    $('#output').append($list); // 将搜索条目放到输出的盒子中
                    // $('a')
                }
            });
        } else {
            alert("please input valid char");
        }
    });
    $(document).keypress(function(e) {
        if (e.which == 13) {
            var searchText = $('#search').val();
            if (Boolean(searchText)) {
                var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchText + "&format=json&callback=?";
                console.log(api);
                $.getJSON(api, function(data) {
                    var len = data[1].length;
                    for (var i = 0; i < len; i++) {
                        var $list = $("<div></div>"); //创建放搜索条目的盒子
                        var $list_title = "<h2><a href=\"" + data[3][i] + "\">" + data[1][i] + "</a></h2>"; //创建放文章title的H1元素
                        var $list_content = "<p>" + data[2][i] + "</p>"; //创建放文章摘要的p元素
                        $($list).append($list_title).append($list_content).addClass("list"); //将题目和文章摘要放到搜索条目盒子
                        $('#output').append($list); // 将搜索条目放到输出的盒子中
                        // $('a')
                    }
                });
            } else {
                alert("please input valid char");
            }
        }
    });
});
