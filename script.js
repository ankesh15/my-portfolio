// Select DOM elements
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

// Add click event listener to the menu icon
menuIcon.addEventListener('click', () => {
    // Toggle the 'active' class on the nav-links to show or hide the mobile menu
    navLinks.classList.toggle('active');
});
document.addEventListener("DOMContentLoaded", () => {
    const letters = document.querySelectorAll('.animated-text');
    letters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 0.1}s`; // Adjust delay for each letter
        letter.style.opacity = 1; // Set to visible when animation starts
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const skillBars = document.querySelectorAll('.progress');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.style.width || `${entry.target.parentElement.style.width}`;
            }
        });
    });

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
});