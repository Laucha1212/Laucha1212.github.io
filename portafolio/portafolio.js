//BOTON VER MAS Y VER MENOS DE LAS MAQUETAS
function mostrarTexto() {
    let texto = document.getElementById("texto-desplegable");
    texto.classList.toggle("oculto");

    //NO FUNCIONA
    let button = document.getElementsById("buttonAboutMe");
    button.classList.toggle("oculto");
}