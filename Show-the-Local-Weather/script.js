$(document).ready(function() {
    // var lat, lon;
    // var arr = [];
    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(function(position) {
    //         lat = Math.round(position.coords.latitude);
    //         lon = Math.round(position.coords.longitude);
    //         var api = 'http://api.openweathermap.org/data/2.5/weather?' + "lat=" + lat + "&lon=" + lon + "&appid=86e8744e87c5dc3b51370144a2d7df8b";
    //         console.log(api);
    //         $.getJSON(api, function(data) {
    //             document.write("城市: " + data.name + "<br>" + "温度：" + data.main.temp);
    //         });
    //     });
    // }

    // $.getJSON('http://ipinfo.io', function(location) {
    //     console.log(location.city);
    //     // console.log(typeof location.loc);
    //     var locArr = location.loc.split(',');
    //     console.log(locArr);
    //     var lat = locArr[0];
    //     var lon = locArr[1];
    //     // console.log(lat+","+lon);
    //     var api = 'http://api.openweathermap.org/data/2.5/weather?' + "lat=" + lat + "&lon=" + lon + "&appid=86e8744e87c5dc3b51370144a2d7df8b";
    //     console.log(api);
    //     $.getJSON(api,function(data){
    //     	document.write("城市: " + location.city + "<br>" + "温度：" + data.main.temp);
    //     });
    // });
    
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?id=1795565&appid=86e8744e87c5dc3b51370144a2d7df8b', function(data) {
        console.log(data.main.temp);
    });
});
