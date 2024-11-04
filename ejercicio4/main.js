
function toggleText() {
  // Obtener el elemento del texto adicional y el enlace
  var textElement = document.getElementById("text");
  var linkElement = document.querySelector("a");

  // Alternar la visibilidad del texto
  if (isVisible) {
    textElement.classList.remove("visible");
    textElement.classList.add("hidden");
    linkElement.textContent = "Seguir leyendo";
  } else {
    textElement.classList.remove("hidden");
    textElement.classList.add("visible");
    linkElement.textContent = "Ocultar exceso de texto";
  }

  // Cambiar el estado de visibilidad
  isVisible = !isVisible;
}
