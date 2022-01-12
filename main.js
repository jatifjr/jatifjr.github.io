const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');
const navLogo = document.querySelector('#navbar-logo');

// Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Active Menu
const highlightMenu = () => {
    const element = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');
    let scrollPos = window.scrollY;

    // 'highlight' class to menu items
    if (window.innerWidth > 768 && scrollPos < 680) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }   else if (window.innerWidth > 768 && scrollPos < 1200) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return;
    }   else if (window.innerWidth > 768 && scrollPos < 2345) {
        servicesMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    };

    if((element && window.innerWidth < 768 && scrollPos < 680) || element) {
        element.classList.remove('highlight');
    }

};

window.addEventListener('scroll',highlightMenu);
window.addEventListener('click',highlightMenu);

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);