const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Close menu if click outside
document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
    }
});

// Reset menu on desktop resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('open');
    }
});
