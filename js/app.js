import {valida} from "./validaciones.js";

const inputs = document.querySelectorAll("input"); // asi seleccionamos todos los inputs de nuestro html y nos devuele un Array.

inputs.forEach(input => { //con el forEach recorremos todos los inputs del array creado y le agregamos la siguiente funcion.
    input.addEventListener("blur" , (input) => { // a todos los inputs le decimos que cuando salga el cursor del input "blur" , que obtengamos su target
        valida(input.target);  
    } );
});