const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("petForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const petName = document.getElementById("petName").value.trim();
  const petType = document.getElementById("petType").value;
  const message = document.getElementById("formMessage");
  if (!petName || !petType) {
    message.textContent = "Completa los dos campos para continuar.";
    return;
  }
  message.textContent = `¡Qué lindo! 🐾 Recuerda cuidar a ${petName} (${petType.toLowerCase()}) con agua fresca, buena alimentación, juego y revisiones veterinarias.`;
});
