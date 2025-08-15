
// Funcion para optar a beneficio de subsidio de arriendo de vivienda, Edad-Cedula de identidad vigente-Ahorro minimo-%Poblacion vulnerable

function beneficioSav (edad, ci, ahorro, pv) {

// Enviamos una alerta al usuario sobre la funcion para que ingrese parametros correctos
alert(
    " Antes de usar esta función, asegúrate de ingresar los parametros correctos:\n" +
    "- Edad: debe ser un número positivo mayor a 0.\n" +
    "- Cédula de identidad: si esta vigente ingresar (true), si no (false).\n" +
    "- Ahorro(UF): debe ser un número mayor o igual 0.\n" +
    "- Porcentaje de vulnerabilidad: debe ser un número mayor o igual 0."
  );

// Definimos las constantes que son los requisitos minimos

	const edadMin = 18; // mayor o igual de 18
	const ahorroMin = 4; // mayor o igual 4 uf
	const pvMax = 70; // porcentaje de vulneracion menor o igual a 70

// Validamos las variables de ingreso
  if (typeof edad !== "number" || isNaN(edad) || edad <= 0 || edad > 150) {
    return "Error: Por favor, ingrese una edad válida.";
  }

  if (typeof ahorro !== "number" || isNaN(ahorro) || ahorro < 0) {
    return "Error: Por favor, ingrese un monto válido de ahorro.";
  }

  if (typeof pv !== "number" || isNaN(pv) || pv <= 0 || pv > 100) {
    return "Error: Por favor, ingrese un valor válido de porcentaje de vulnerabilidad.";
  }

// Creamos una variable let vacia para ir agregando los resultados obtenidos
let resultadoBeneficio = [];

// Condiciones para edad
  if (edad >= edadMin) {  // mayor o igual >= a esta condicion
    resultadoBeneficio.push(`Cumple con la edad mínima de ${edadMin} años, edad actual ${edad}.`); //.push agrega el elemento a resultado ${var} inserta variables en texto
  } else {
    resultadoBeneficio.push(`No cumple con la edad mínima de ${edadMin} años, edad actual ${edad}.`);
  }

// Condiciones para la cedula
  if (ci === true) { // ci tiene que ser extrictamente igual a true para que cumpla la condicion
    resultadoBeneficio.push("Cuenta con cédula de identidad apta.");
  } else {
    resultadoBeneficio.push("No tiene cédula de identidad apta.");
  }

// Condiciones para el ahorro
  if (ahorro >= ahorroMin) {
    resultadoBeneficio.push(`Cumple con el ahorro mínimo de ${ahorroMin}UF, ahorro actual ${ahorro}UF.`);
  } else {
    resultadoBeneficio.push(`No cumple con el ahorro mínimo de ${ahorroMin}UF, ahorro actual ${ahorro}UF.`);
  }

// Condiciones para el segmento mas vulnerable

  if (pv <= pvMax) {
    resultadoBeneficio.push(`Su porcentaje de vulnerabilidad es del ${pv}%, dentro del permitido menor al ${pvMax}%.`);
  } else {
    resultadoBeneficio.push(`No cumple con el porcentaje de vulnerabilidad, excede el maximo ${pvMax}%, porcentaje actual ${pv}%.`);
  }

// Verificamos si cumple o no las condiciones para optar por el beneficio

let cumpleEdad = edad >= edadMin;
let cumpleCi = ci === true;
let cumpleAhorro = ahorro >= ahorroMin;
let cumplePv = pv <= pvMax;

if (cumpleEdad && cumpleCi && cumpleAhorro && cumplePv){
	resultadoBeneficio.push("Felicidades, puedes optar por el beneficio de subsidio de arriendo de vivienda.");
}
else {
	resultadoBeneficio.push("En esta ocasion no puedes optar por el beneficio.");
}

// Obtenemos los resultados de cada condicion en base a las variables ingresadas y ademas analizamos si puede optar o no por el beneficio 
return resultadoBeneficio.join("\n"); // .join deja el array como 1 solo string y "\n" realiza un salto de linea (entre cada resultado)	

}