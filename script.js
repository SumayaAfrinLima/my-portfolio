


/* =========================
   1. TYPING ANIMATION
========================= */
const typingElement = document.getElementById("typing");

const words = [
    "Software Engineering Student",
    "Aspiring Web Developer",
    "Tech Enthusiast",
    "Creative Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (deleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = deleting ? 45 : 90;

    if (!deleting && charIndex === currentWord.length) {
        speed = 1400;
        deleting = true;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

if (typingElement) {
    typeEffect();
}

/* =========================
   2. MOBILE NAVBAR
========================= */
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
    });
});

/* =========================
   3. DARK / LIGHT MODE
========================= */
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        themeToggle.textContent = "🌙";
        localStorage.setItem("portfolio-theme", "light");
    } else {
        themeToggle.textContent = "☀️";
        localStorage.setItem("portfolio-theme", "dark");
    }
});

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    themeToggle.textContent = "🌙";
}

/* =========================
   4. SCROLL REVEAL ANIMATION
========================= */
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(function (element) {
    observer.observe(element);
});

/* =========================
   5. ACTIVE NAV LINK
========================= */
const sections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {
    let currentSection = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navigationLinks.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});

/* =========================
   6. BACK TO TOP BUTTON
========================= */
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
        backToTop.classList.add("visible");
    } else {
        backToTop.classList.remove("visible");
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* =========================
   7. CURRENT YEAR
========================= */
document.getElementById("year").textContent = new Date().getFullYear();
