document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${100 * (i - index)}%)`;
        });
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }

    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            currentSlide = i;
            showSlide(currentSlide);
        });
    });

    showSlide(currentSlide);
});
