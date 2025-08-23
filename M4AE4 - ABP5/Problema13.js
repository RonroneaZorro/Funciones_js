
// Funcion cuenta regresiva

// Analizamos las condiciones iniciales
// El numero n debe ser menor a 100
// La cuenta regresiva debe llegar a 1 (por lo que n debe ser mayor o igual a 1)

function cuentaRegresiva(n){

// Evaluamos las condiciones de entrada, nos aseguramos que sea un numero, no un Not a Number (NaN), que sea entero y positivo

if (typeof n !== "number" || isNaN(n) || n % 1 !== 0 || n < 0 || n >= 100){
	return "Ingrese un numero valido mayor que 0 y menor que 100"
}

// Agregamos un array vacio en donde agregaremos los valores como string

  let resultado = "";
  for (let i = n; i >= 1; i--) {
    resultado += i + (i > 1 ? ", " : ""); 
  }

  return resultado;
}
