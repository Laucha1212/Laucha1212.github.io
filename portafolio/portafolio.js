//BOTON VER MAS Y VER MENOS DE LAS MAQUETAS
function mostrarTexto() {
    //MUESTRA TEXTO
    let texto = document.getElementById("desplegable");
    texto.classList.toggle("oculto");
    //OCULTA BOTON
    let button = document.getElementById("buttonAboutMe");
    button.classList.toggle("oculto");
}


//FUNCION DE MODAL
document.addEventListener("click",function (e){
    if(e.target.classList.contains("gallery-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show()
    }
})