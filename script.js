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

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    function validateForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill in all fields.');
            return false;
        }


        return true;
    }

    const eventsSection = document.querySelector('.events ul');
    const eventsData = ['Outdoor Coffee Festival - June 15', 'Artisanal Coffee Tasting - July 10', 'Coffee and Dessert Pairing - August 5'];

    eventsData.forEach(function (event) {
        const listItem = document.createElement('li');
        listItem.textContent = event;
        eventsSection.appendChild(listItem);
    });
});
const images = document.querySelectorAll('img');

images.forEach(image => {
    image.addEventListener('touchstart', handleTouchStart);
    image.addEventListener('touchend', handleTouchEnd);
});

function handleTouchStart(event) {
    event.target.dataset.originalStyles = event.target.getAttribute('style');

    event.target.style.filter = 'invert(100%)';
    event.target.style.transform = 'scale(1.1)';
}

function handleTouchEnd(event) {
    event.target.removeAttribute('style');
    event.target.setAttribute('style', event.target.dataset.originalStyles);
}
