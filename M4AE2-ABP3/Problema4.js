
// Funcion validar año bisiesto

function añoBisiesto (validarAño){

// Definimos los requisitos minimos
// divisible por 4 y no por 100
// ó divisible entre 400

// Validamos las variables de ingreso

  if (typeof validarAño !== "number" || isNaN(validarAño) || validarAño <=0) { // el numero debe ser mayor o igual a 0
    return "Error: Por favor, ingrese año mayor o igual a 0.";
  }
// Creamos las condiciones para evaluar la funcion, divisible por 4 y no por 100 ó divisible en 400

if ((validarAño % 4 === 0 && validarAño %100 !== 0) || validarAño %400 === 0){
	return "El año ingresado es un año bisiesto"
	} else {
		return "El año ingresado no es un año bisiesto"
}
}