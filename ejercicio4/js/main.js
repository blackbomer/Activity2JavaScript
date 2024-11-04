
var isVisible = false;

function toggleText() {
  
  var textElement = document.getElementById("text");
  var linkElement = document.querySelector("a");

  
  if (isVisible) {
    textElement.classList.remove("visible");
    textElement.classList.add("hidden");
    linkElement.textContent = "Seguir leyendo";
  } else {
    textElement.classList.remove("hidden");
    textElement.classList.add("visible");
    linkElement.textContent = "Ocultar exceso de texto";
  }

  
  isVisible = !isVisible;
}

