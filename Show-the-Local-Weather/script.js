$(document).ready(function() {
    var lat, lon;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            console.log(lat);
            console.log(lon);
        });
    }


    $.getJSON('http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=86e8744e87c5dc3b51370144a2d7df8b', function(data) {
        document.write("Name: " + data.name + "<br>" + "Cod: " + data.cod);
    });
});
