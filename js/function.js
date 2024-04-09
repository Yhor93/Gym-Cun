document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel-slide'); 
    let position = 0;

    setInterval(function() {
        position -= 100;
        if (position < -400) {
            position = 0; 
        }
        carousel.style.transform = `translateX(${position}%)`;
    }, 3000);
});