const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle the open class for mobile menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});
