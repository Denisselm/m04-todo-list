//variables html

let input = document.querySelector('.input')
let boton = document.querySelector('.boton-agregar')
let container = document.querySelector('.container')

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