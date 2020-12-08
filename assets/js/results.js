var apiKey = '32823741b8d73ffd72b5e88e55a0b391';
var apiKeyGeo = 'c80e9673c97a49c7927cee985eb54a1b';
const userFrom = function (location) {
    var latitude = location.coords.latitude;
    var longitude = location.coords.longitude;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKeyGeo}`)
        .then(function (response) {
            response.json()
                .then(function (data) {
                    var userCity = data.results[0].components.city;
                    localStorage.setItem("userCity", userCity);
                    var userLocation = $('#skyScanner');
                    userLocation.attr('data-origin-name', userCity);
                });
        });
};
navigator.geolocation.getCurrentPosition(userFrom);
var cityTwoGo = function () {
    var city2Go = localStorage.getItem("cityToGo");
    console.log(city2Go);
    var cityApi = `https://api.openweathermap.org/data/2.5/weather?q=${city2Go}&appid=${apiKey}`
    fetch(cityApi).then(function (response) {
        response.json().then(function (data) {
            var longitude = data.coord['lon'];
            var latitude = data.coord['lat'];
            var icon = data.weather[0].icon;
            cityWeather(latitude, longitude, icon);
        });
    });
}
var cityWeather = function (lat, lon, icon) {
    var apiCityWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKey}`
    fetch(apiCityWeather).then(function (response) {
        response.json().then(function (data) {
            var temp = data.current['temp'];
            temp = Math.round(((temp - 273.15) * 1.8 + 32));
            var humidity = data.current['humidity'];
            var windSpeed = data.current['wind_speed'];
            var weatherInfo = document.querySelector('.stats');
            var weatherInfos = document.createElement('div');
            weatherInfos.classList = "col s6 m6 l4 z-depth-5 card cyan darken-3";

            var iconImg = document.createElement("img")
            iconImg.setAttribute("src", "http://openweathermap.org/img/wn/" + icon + ".png");
            weatherInfos.appendChild(iconImg);

            var tempP = document.createElement("p");
            tempP.textContent = 'Temperature: ' + temp + " F";
            weatherInfos.appendChild(tempP);

            var humP = document.createElement("p");
            humP.textContent = 'Humidity: ' + humidity + "%";
            weatherInfos.appendChild(humP);

            var windP = document.createElement("p");
            windP.textContent = 'Wind Speed: ' + windSpeed + " MPH";
            weatherInfos.appendChild(windP);

            weatherInfo.appendChild(weatherInfos);
            console.log(temp);
            console.log(humidity);
            console.log(windSpeed);
        })
    })
}


cityTwoGo();