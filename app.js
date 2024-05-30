const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Toggle mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Close mobile menu when clicking on a menu item
menuLinks.addEventListener('click', mobileMenu);

// Close mobile menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !menuLinks.contains(event.target)) {
        if (menu.classList.contains('is-active')) {
            menu.classList.remove('is-active');
            menuLinks.classList.remove('active');
        }
    }
});
