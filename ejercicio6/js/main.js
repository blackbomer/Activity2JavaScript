document.addEventListener("DOMContentLoaded", function () {
  // Selecciona solo los enlaces con la clase "toggle-content"
  const toggleLinks = document.querySelectorAll("a.toggle-content");

  toggleLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const section = link.previousElementSibling;

      // Alterna las clases CSS para controlar visibilidad
      if (section.classList.contains("hidden")) {
        section.classList.remove("hidden");
        section.classList.add("visible");
        link.textContent = "Ocultar contenidos";
      } else {
        section.classList.remove("visible");
        section.classList.add("hidden");
        link.textContent = "Mostrar contenidos";
      }
    });
  });
});
