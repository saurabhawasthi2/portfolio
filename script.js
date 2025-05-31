function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Thanks! Your message has been received.");
});
