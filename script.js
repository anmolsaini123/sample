document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Shoe Slider Logic ---
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    const slideInterval = 4000; // 4 seconds

    function showSlide(index) {
        // Remove active class from all
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Auto slide timer
    let autoPlay = setInterval(nextSlide, slideInterval);

    // Click on dots to change slide
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(autoPlay); // Stop auto play on click
            currentIndex = index;
            showSlide(currentIndex);
            autoPlay = setInterval(nextSlide, slideInterval); // Restart auto play
        });
    });


    // --- 2. Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Change icon from bars to X
        const icon = menuToggle.querySelector('i');
        if(navLinks.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-xmark');
        } else {
            icon.classList.replace('fa-xmark', 'fa-bars');
        }
    });

});