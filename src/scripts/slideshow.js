
// Slideshow runs every 5 seconds
let slides = document.querySelector('#slideshow > div:gt(0)')
slides.hide();

setInterval(function() {
    slides.fadeOut(1000);
    slides.next();
    slides.fadeIn(1000);
    slides.end();
    slides.appendTo('#slideshow');
}, 5000)
