
// Funcion numero con opciones de ganar

function numeroGanador (numeroIngresado) {


// Definimos las constantes que son los requisitos minimos

	const numGan1 = 70; // numero con posibilidades de ganar
	const numGan2 = 55; // numero con posibilidades de ganar
	const numMax = 15; // numero maximo(+1) del rango con posibilidades de ganar
	const numMin = 5; // numero minimo(-1) del rango con posibilidades de ganar

// Validamos las variables de ingreso

  if (typeof numeroIngresado !== "number" || isNaN(numeroIngresado) || numeroIngresado <= 1 || numeroIngresado > 100 || numeroIngresado %1 !== 0) { // el numero debe ser mayor a 1 y menor o igual a 100
    return "Error: Por favor, ingrese un numero valido.";
  }

// Creamos las condiciones para evaluar la funcion, si uno de los dos numeros con posibilidades o el rango que tambien posee posibilidades de ganar

if (numeroIngresado === numGan1 || numeroIngresado === numGan2 || (numeroIngresado > numMin && numeroIngresado < numMax)){
	return "El número ingresado tiene opciones de ganar"
	} else {
		return "El número ingresado no es favorable"
}

}
