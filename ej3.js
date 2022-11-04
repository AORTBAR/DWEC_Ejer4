window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("boton1").addEventListener('click',(event) => {
        document.getElementById("img1").src = "JS.jpg";
    });

    document.getElementById("boton2").addEventListener('click',(event) => {
        document.getElementById("img1").src = "descarga.png";
    });

    document.getElementById("boton3").addEventListener('click',(event) => {
        document.getElementById("img1").src = "php.jpg";
    });   
});
