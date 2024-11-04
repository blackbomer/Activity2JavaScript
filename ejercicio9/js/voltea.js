const cat = document.getElementById("myCat");

let position = 0; 
let direction = 1; 
const speed = 10; 

function catWalk() {
        
    position += speed * direction;
    cat.style.left = position + "px";

    const windowWidth = window.innerWidth;
    const catWidth = cat.width;

    if (position + catWidth >= windowWidth) {
        direction = -1;
        cat.style.transform = "scaleX(-1)"; // Esta es la funcion que voltea la imagen
    }

    if (position <= 0) {
        direction = 1;
          cat.style.transform = "scaleX(1)"; // Esta funcion restaura la imagen a su orientación original
      }
   }

      
setInterval(catWalk, 50);