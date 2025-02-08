// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Carousel Functionality
const carouselTrack = document.querySelector('.carousel-track');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
let currentIndex = 0;

function updateCarousel() {
    carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = carouselItems.length - 1;
    }
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    if (currentIndex < carouselItems.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});

// Automatically move to the next slide every 3 seconds
function moveToNextSlide() {
    const totalItems = carouselItems.length;
    currentIndex = (currentIndex + 1) % totalItems; // Loops back to the first slide after the last one
    updateCarousel();
}

setInterval(moveToNextSlide, 3000);

// Form Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic error handling
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all the fields.');
        return;
    }

    alert('Thank you for contacting us!');
    this.reset();
});

// Newsletter Subscription
document.getElementById('newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic error handling
    const email = this.querySelector('input[type="email"]').value.trim();

    if (!email) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Thank you for subscribing!');
    this.reset();
});

// Navbar Toggling
function toggleMenu() {
    const navUl = document.querySelector('nav ul');
    const navToggler = document.querySelector('.nav-toggler');
    const overlay = document.querySelector('.overlay');
    const body = document.body;

    // Toggle the 'show' class for nav and toggle the nav-toggler animation
    navUl.classList.toggle('show');
    navToggler.classList.toggle('open');
    body.classList.toggle('no-scroll');

    // Toggle the overlay visibility based on the menu state
    if (navUl.classList.contains('show')) {
        overlay.style.display = 'block';
    } else {
        overlay.style.display = 'none';
    }
}

// Close the menu when clicking outside (on the overlay)
document.querySelector('.overlay').addEventListener('click', toggleMenu);

// Smooth scroll to top
document.querySelector('.back-to-top').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/hide back-to-top button
window.addEventListener('scroll', () => {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});
