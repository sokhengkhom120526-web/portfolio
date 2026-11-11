const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links"); // Fixed: changed from .nav-link to .nav-links

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show"); // Fixed: changed from is-open to show
});

// Hide menu automatically when a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show"); // Fixed: changed from is-open to show
    });
});