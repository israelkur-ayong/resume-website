// Mobile Navbar Toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle-menu");
  const navLinks = document.getElementById("nav-links");

  toggleButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Contact Form Validation
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const response = document.getElementById("formResponse");

      const namePattern = /^[A-Za-z\s'-]+$/;
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

      if (!name || !namePattern.test(name)) {
        response.textContent = "Please enter a valid name (letters only).";
        response.style.color = "red";
        return;
      }

      if (!email || !emailPattern.test(email)) {
        response.textContent = "Please enter a valid email address.";
        response.style.color = "red";
        return;
      }

      if (!message) {
        response.textContent = "Please enter your message.";
        response.style.color = "red";
        return;
      }

      response.textContent = "Message sent successfully!";
      response.style.color = "green";

      contactForm.reset();
    });
  }
});
