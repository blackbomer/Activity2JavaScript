
const cat = document.getElementById("myCat");

function walk() {
  
  cat.style.left = parseInt(cat.style.left) + 10 + "px";

  
  const distanceWalked = parseInt(cat.style.left);
  const windowWidth = window.innerWidth;

  
  if (distanceWalked > windowWidth - cat.width) { // Ajuste aquí
    cat.style.left = "0px";
  }
}

window.setInterval(walk, 50);