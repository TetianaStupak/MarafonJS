
function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide');

    slides[activeSlide].classList.add('active');

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            crearActiveClasses()

            slide.classList.add('active')
        })
    };

    function crearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    };
}

slidesPlugin(4);