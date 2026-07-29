// ### 3. JavaScript (`script.js`)
// This handles the animation initialization and a smooth navbar effect.


// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000, 
    once: true, 
    offset: 100 
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 10%';
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    } else {
        navbar.style.padding = '20px 10%';
        navbar.style.background = 'rgba(15, 23, 42, 0.8)';
    }
});

// Smooth Scrolling for Navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Menu Toggle (Simple Implementation)
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    // You can expand this to show a mobile sidebar
    alert("Mobile menu clicked! Implement a sidebar transition here.");
});