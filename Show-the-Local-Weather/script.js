$(document).ready(function() {
        $.getJSON('//ipinfo.io', function(location) {
        var locArr = location.loc.split(',');
        // console.log(locArr);
        var lat = locArr[0];
        var lon = locArr[1];
        // console.log(lat+","+lon);
        var api = '//api.openweathermap.org/data/2.5/weather?' + "lat=" + lat + "&lon=" + lon + "&units=metric&appid=86e8744e87c5dc3b51370144a2d7df8b";
        console.log(api);
        $.getJSON(api, function(data) {
            // document.write("城市: " + location.city + "<br>" + "温度：" + data.main.temp);
            $('#loc').text(location.city);
            $('#temp').text(data.main.temp);
            $('#wind').text(data.wind.speed);
            $('#desc').text(data.weather[0].description);
            $('#humidity').text(data.main.humidity);
            $weather = data.weather[0].main;
            // $weather = 'Additional';
            // console.log($weather);

            $icon = $('#icon');
            $body = $('body');
            switch ($weather) {
                case 'Clear':
                    $icon.addClass('wi-day-sunny');
                    $body.css('background', 'url(https://images.pexels.com/photos/28121/pexels-photo-28121.jpg)');
                    break;

                case 'Thunderstorm':
                    $icon.addClass('wi-thunderstorm');
                    $body.css('background', 'url(https://images.pexels.com/photos/29550/pexels-photo-29550.jpg)');
                    break;

                case 'Clouds':
                    $icon.addClass('wi-day-cloudy');
                    $body.css('background', 'url(https://upload.wikimedia.org/wikipedia/commons/8/83/Sky_cloudy.JPG)');
                    break;

                case 'Mist':
                    $icon.addClass('wi-sprinkle');
                    $body.css('background', 'url(https://images.pexels.com/photos/603/sky-clouds-sun.jpg)');
                    break;

                case 'Extreme':
                    $icon.addClass('wi-cloudy');
                    $body.css('background', 'url(https://images.pexels.com/photos/325288/pexels-photo-325288.jpeg)');
                    break;

                case 'Atmosphere':
                    $icon.addClass('wi-windy');
                    $body.css('background', 'url(https://images.pexels.com/photos/314726/pexels-photo-314726.jpeg)');
                    break;

                case 'Snow':
                    $icon.addClass('wi-snow');
                    $body.css('background', 'url(https://images.pexels.com/photos/4022/cold-snow-forest-trees.jpeg)');
                    break;

                case 'Rain':
                    $icon.addClass('wi-rain');
                    $body.css('background', 'url()');
                    $body.css('background', 'url(http://www.publicdomainpictures.net/pictures/30000/velka/rain.jpg)');
                    break;

                case 'Drizzle':
                    $icon.addClass('wi-night-rain');
                    $body.css('background', 'url(https://c1.staticflickr.com/7/6028/6009378383_a002798f38_b.jpg)');
                    break;

                case 'Additional':
                    $icon.addClass('wi-cloud');
                    $body.css('background', 'url(https://upload.wikimedia.org/wikipedia/commons/d/d9/Wind_Power_at_Guanting_Resevoir.jpg)');
                    break;

                default:
                    $body.css('background', 'url(https://images.pexels.com/photos/2969/climate-cold-glacier-iceberg.jpg)');
                    break;
            }
            $body.css('background-repeat', 'no-repeat');
            $body.css('background-size', '100% 100%');
        });
    });
});
