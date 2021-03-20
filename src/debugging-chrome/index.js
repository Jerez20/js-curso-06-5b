//Jazael Jerez Marte #6
function repetir(nombre, veces) {
/**
 * @autor Jazael Jerez
 * @version 0.1.0
 * @param {string} nombre
 * @param {number} veces
 * @return {none}
 */

 for (let index = 1; index <= veces; index++) {

let element = document.createElement('p');
element.innerText = nombre;
document.body.appendChild(element);

 }

}

const nom = prompt("Escribe tu nombre");
const vcs = parseInt(prompt("Escribe las vcs que lo montar"));

repetir(nom, vcs);