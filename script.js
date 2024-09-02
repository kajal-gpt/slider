// script.js
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;

function showSlide(i) {
    index = (i + slides.length) % slides.length; // Ensures the index is within bounds
    slider.style.transform = `translateX(${-index * 100}%)`;
}

prev.addEventListener('click', () => showSlide(index - 1));
next.addEventListener('click', () => showSlide(index + 1));

// Auto-slide (optional)
setInterval(() => showSlide(index + 1), 3000);
