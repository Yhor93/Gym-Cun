document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel-slide'); 
    const images = document.querySelectorAll(".carousel-slide img");
    const imageCounter = document.querySelector(".image-counter");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");

    let position = 0;
    let counter = 1;
    const totalImages = images.length;

    function updateImageCounter() {
        imageCounter.textContent = `${counter}/${totalImages}`;
    }

    setInterval(function() {
        moveNext();
    }, 3000);
    
    function moveNext() {
        position -= 100;
        if (position < -400) {
            position = 0; 
        }
        carousel.style.transform = `translateX(${position}%)`;
        // Actualizar contador de imágenes cuando cambie de imagen
        counter++;
        if (counter > totalImages) {
            counter = 1;
        }
        updateImageCounter();
    }

    function movePrev() {
        position += 100;
        if (position > 0) {
            position = -400; 
        }
        carousel.style.transform = `translateX(${position}%)`;
        // Actualizar contador de imágenes cuando cambie de imagen
        counter--;
        if (counter < 1) {
            counter = totalImages;
        }
        updateImageCounter();
    }

    prevButton.addEventListener("click", movePrev);
    nextButton.addEventListener("click", moveNext);
    
    // Llamar a la función para actualizar el contador de imágenes inicialmente
    updateImageCounter();
});
