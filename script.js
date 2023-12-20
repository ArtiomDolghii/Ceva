document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 1;
    showSlide(currentSlide);

    function showSlide(n) {
        const slides = document.getElementsByClassName('slide');
        const totalSlides = slides.length;

        if (n > totalSlides) {
            currentSlide = 1;
        }

        if (n < 1) {
            currentSlide = totalSlides;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        slides[currentSlide - 1].style.display = 'block';
    }

    function nextSlide() {
        showSlide(++currentSlide);
    }

    function prevSlide() {
        showSlide(--currentSlide);
    }

    setInterval(nextSlide, 5000);

});
