document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Page Load Animation ---
  document.body.classList.add("loaded");

  // --- 2. Mobile Menu Toggle ---
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-links a");

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    // Simple animation or icon change if needed
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });

  // --- 3. Navbar Scroll Effect ---
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // --- 4. Intersection Observer for Scroll Animations ---
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(
    ".fade-in, .fade-in-up, .reveal-up, .reveal-img"
  );
  animatedElements.forEach((el) => sectionObserver.observe(el));

  // --- 5. Simple Parallax for Hero ---
  const heroBg = document.getElementById("hero-bg");
  if (heroBg) {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      heroBg.style.transform = `translateY(${scrollY * 0.5}px)`;
    });
  }
});
