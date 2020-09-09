const navbar = document.querySelector(".navbar");
const navLink = document.querySelectorAll(".nav-link");
const navbarLink = document.querySelector(".navbar-nav");
let lebar = 0;
let tinggi = 0;

const navLinkToggle = () => {
    navbarLink.addEventListener("click", function(event) {
        navLink.forEach(link => {
            link.classList.remove("active");
        });
        event.target.classList.add("active");
    })
}

const navbarLoad = () => {
    window.addEventListener("load", function() {
        lebar = window.innerWidth;
        tinggi = window.pageYOffset;
        if (lebar > 992 && tinggi < 65) {
            navbar.classList.add("navbar-dark");
        } else if (lebar > 992 && tinggi > 65) {
            navbar.classList.add("navbar-light", "bg-light");    
        } else if (lebar < 992) {
            navbar.classList.add("navbar-light", "bg-light");
        }        
    })
}

const navbarResize = () => {
    window.addEventListener("resize", function() {
        lebar = window.innerWidth;
        tinggi = window.pageYOffset
        if (lebar > 992 && tinggi < 65) {
            navbar.classList.remove("navbar-light", "bg-light");
            navbar.classList.add("navbar-dark");
        } else if (lebar < 992) {
            navbar.classList.remove("navbar-dark");
            navbar.classList.add("navbar-light", "bg-light");
        }
    })
}

const navbarScroll = () => {
    window.addEventListener("scroll", function() {
        tinggi = window.pageYOffset;
        lebar = window.innerWidth;
        if (tinggi > 65 && lebar > 992) {
            navbar.classList.remove("navbar-dark");
            navbar.classList.add("navbar-light", "bg-light");
        } else if (tinggi < 65 && lebar > 992) {
            navbar.classList.remove("navbar-light", "bg-light");
            navbar.classList.add("navbar-dark");
        }
    })
}

export {navbarLoad, navLinkToggle, navbarResize, navbarScroll};