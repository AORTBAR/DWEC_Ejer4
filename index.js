window.addEventListener('DOMContentLoaded', () => {

    let color=prompt("escribe un color");

    if(color=="" || color==null){
        alert("escribe un color");
        
    } else if (color=="verde") {
        let body= document.getElementById("body");
        body.style.backgroundColor="green";

    } else if (color=="azul") {
        let body= document.getElementById("body");
        body.style.backgroundColor="blue";

    } else if (color=="amarillo") {
        let body= document.getElementById("body");
        body.style.backgroundColor="yellow";

    } else if (color=="naranja") { 
        let body= document.getElementById("body");
        body.style.backgroundColor="orange";
        
    } else if (color=="rojo") {
        let body= document.getElementById("body");
        body.style.backgroundColor="red";
        
    } else if (color=="rosa") {
        let body= document.getElementById("body");
        body.style.backgroundColor="pink";
        
    } else if (color=="violeta"){
        let body= document.getElementById("body");
        body.style.backgroundColor="violet";
        }
    else if (color=="marrón"){
        let body= document.getElementById("body");
        body.style.backgroundColor="maroon";
        }
     else if (color=="gris"){
        let body= document.getElementById("body");
        body.style.backgroundColor="grey";
        }
    }
    
);
