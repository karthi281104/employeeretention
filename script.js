// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
});

document.addEventListener("DOMContentLoaded", function () {
    const featureBoxes = document.querySelectorAll(".feature-box");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.3 });

    featureBoxes.forEach(box => {
        box.style.opacity = "0";
        box.style.transform = "translateY(30px)";
        observer.observe(box);
    });
});
