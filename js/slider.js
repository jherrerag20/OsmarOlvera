let currentIndex = 0;
const slides = document.querySelectorAll('.swiper-slide');
const totalSlides = slides.length;
const bioText = document.getElementById('bio-text');
const slideTitle = document.getElementById('slide-title');
const nextButton = document.querySelector('.swiper-button-next');
const prevButton = document.querySelector('.swiper-button-prev');

function updateSlide() {
    document.querySelector('.swiper-wrapper').style.transform = `translateX(-${currentIndex * 100}%)`;
    const slide = slides[currentIndex].querySelector('.slide-text');
    const slideText = slide.querySelector('p').innerHTML; // Use innerHTML to preserve formatting
    const slideTitleText = slide.querySelector('h3').innerText;
    bioText.innerHTML = slideText;
    slideTitle.innerText = slideTitleText;
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
});

// Initialize the first slide text and title
updateSlide();
