var body = document.querySelector(".body");
body.classList.add("body-before-load");
window.addEventListener('load', function () {
    var preloader = document.querySelector('.preloader');
    preloader.classList.add('preload-finish');
    body.classList.remove("body-before-load")
})