const userFrom = function (location) {
    console.log(location);
    var latitude = location.coords.latitude;
    var longitude = location.coords.longitude;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=c80e9673c97a49c7927cee985eb54a1b`)
        .then(function (response) {
            response.json()
                .then(function (data) {
                    var userCity = data.results[0].components.city;
                    var userLocation = $('.cityName');
                    userLocation.attr('data-origin-name',userCity);
                });
        });
};
navigator.geolocation.getCurrentPosition(userFrom);


var body = document.querySelector(".body");
body.classList.add("body-before-load");
window.addEventListener('load', function () {
    var preloader = document.querySelector('.preloader');
    preloader.classList.add('preload-finish');
    body.classList.remove("body-before-load")
})