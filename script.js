// Mobile Navbar Toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle-menu");
  const navLinks = document.getElementById("nav-links");

  toggleButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
});

// Future features can be added here:
// - Form validation
// - Modals
// - Image sliders