export  function valida  (input)  {
const tipodeinput = input.dataset.tipo //con  .dataset le estamos indicando buscar entre todos los datas y con el .----- se escribe el nombre del data al que quieramos llamar y asi accedemos a ese elemento html. 
  if (validadores[tipodeinput]){
    validadores[tipodeinput](input)
  }

   if(input.validity.valid){
    input.parentElement.classList.remove("input-container--invalid")
  } else {
    input.parentElement.classList.add("input-container--invalid")
  }

};


const mensajedeError = {
  nombre : {
    valueMissing : "este campo no puede estar vacio"
  },
  email : {
    valueMissing : "este campo no puede estar vacio" ,
    typeMismatch : "el correo no es valido"
  },
  password : {
    valueMissing : "este campo no puede estar vacio" ,
    patternMismatch : "al menos 6 caracteres con una MAYUSCULA, un numero y un caracter especial",
  },
  nacimiento : {
    valueMissing : "este campo no puede estar vacio" ,
    customError : "debes tener al menos 18 años ",
  }
}

const validadores = {
  nacimiento : (input) => validarnacimiento(input),
};

//con esta funcion estamos recibiendo la fecha ingresada por el cliente para despues compararla con la fecha actual
function validarnacimiento(input)  {
const fechacliente = new Date (input.value); //con  new Date(input.value) le estamos asignando la fecha ingresada por el cliente : 
let mensaje = "";
if (!mayoredad(fechacliente)) {// aca le decimos que si la fecha de mayoria de edad es diferente (false) a la fecha ingresada por el cliente que le devuelva el mensaje.
mensaje = "debes tener al menos 18 años "  //es el mensaje que aparecera si el usuario no es mayor de edad.
}

input.setCustomValidity(mensaje);// el .setCustomValidity(mensaje) define el mensaje de validacion personalizado para el elemento seleccionado con un mensaje especifico, usa una string vacia para indicarq que ese elemento no tiene error de validacion customizado, 
}



// esta funcion la hicimos para saber si una persona es mayor o no de edad.
function mayoredad(fecha) {
const fechaactual = new Date (); // new Date() sin argumentos, crea un objeto de fecha con la fecha y hora actual:
const diferenciafechas = new Date(
  fecha.getUTCFullYear() + 18, //con  .getUTCFullYear() estamos obteniendo el AÑO de la fecha // y en este caso le estamos sumando 18 años.
  fecha.getUTCMonth(),// con .getUTCMonth() estamos obteniendo el MES de la fecha.
  fecha.getUTCDate() //con .getUTCDate() estamos obteniendo el DIA de la fecha.
);
return diferenciafechas <= fechaactual  //aca comparamos las fechas ingresadas y si cumple con la mayoria de edad.
}


