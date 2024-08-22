document.addEventListener("DOMContentLoaded", (event) => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const header = document.querySelector("header");
  const navLinks = document.querySelectorAll(".nav-links a");
  const icon = themeToggle.querySelector("i");

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    header.classList.toggle("dark-mode");
    navLinks.forEach((link) => link.classList.toggle("dark-mode"));

    if (body.classList.contains("dark-mode")) {
      icon.classList.replace("bx-moon", "bx-sun");
    } else {
      icon.classList.replace("bx-sun", "bx-moon");
    }
  });
});

document.getElementById("backToTop").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});