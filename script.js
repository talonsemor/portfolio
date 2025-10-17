// Theme toggle
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") root.classList.add("light");
updateThemeIcon();

themeToggle.addEventListener("click", () => {
  root.classList.toggle("light");
  localStorage.setItem("theme", root.classList.contains("light") ? "light" : "dark");
  updateThemeIcon();
});
function updateThemeIcon() {
  themeToggle.textContent = root.classList.contains("light") ? "🌞" : "🌙";
}

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("active"));

// Typing effect with fade
const typingText = document.getElementById("typing-text");
const roles = ["Frontend Developer", "Designer", "Creator"];
let index = 0;
function changeRole() {
  typingText.classList.remove("visible");
  setTimeout(() => {
    typingText.textContent = roles[index];
    typingText.classList.add("visible");
    index = (index + 1) % roles.length;
  }, 400);
}
setInterval(changeRole, 2000);
changeRole();

// Contact form demo
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  formMsg.textContent = "Sending...";
  setTimeout(() => {
    form.reset();
    formMsg.textContent = "✅ Message received (demo)";
  }, 800);
});

// ScrollReveal
ScrollReveal({
  distance: "40px",
  duration: 800,
  easing: "ease-in-out",
  reset: false,
});
ScrollReveal().reveal(".reveal", { origin: "bottom", interval: 100 });

// Skill bar animation
const progressFills = document.querySelectorAll(".progress-fill");
window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.8;
  progressFills.forEach(fill => {
    const rect = fill.getBoundingClientRect();
    if (rect.top < trigger) {
      fill.style.width = fill.getAttribute("data-percent");
    }
  });
});

// Current year
document.getElementById("year").textContent = new Date().getFullYear();