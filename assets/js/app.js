//variables html

let input = document.querySelector('.input')
let boton = document.querySelector('.boton-agregar')
let container = document.querySelector('.container')
let aviso = document.querySelector(".aviso");

//eventos para click y enter

botonAgregar.addEventListener("click", () => {
    chequearInput();
})

inputPricipal.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        chequearInput();
    }
})

//crear clase item que contendra en su constructor un metodo llamado crear div
class item {
    constructor(inputPricipal) {
        this.inputPrincipal = inputPricipal
    }

};
// crear un elemento input dentro de un metodo llamado crear div
crearDiv(tarea) {
    //Crear elemento input
    let inputItem = document.createElement("input");
    inputItem.setAttribute("type", "text");
    inputItem.setAttribute("disabled", true);
    inputItem.classList.add("item-input");
    inputItem.value = tarea;

    //crear div
    let nuevoDiv = document.createElement("div");
    nuevoDiv.classList.add("item")


}

//crear botones

//Crear boton editar
let botonEditar = document.createElement("button");
botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
botonEditar.classList.add("boton-editar");

//Crear boton eliminar
let botonRemover = document.createElement("button");
botonRemover.innerHTML = "<i class='fas fa-trash'></i>";
botonRemover.classList.add("boton-remover");