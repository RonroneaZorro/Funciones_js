
// Funcion sumatoria hasta n

// Analizamos las condiciones iniciales
// n debe ser menor que 100 y entero
// sumar desde 1 hasta n
// Cada termino debe ser el doble del anterior

function sumatoria(n){

// Evaluamos las condiciones de entrada, nos aseguramos que sea un numero, no un Not a Number (NaN), que sea entero y positivo

if (typeof n !== "number" || isNaN(n) || n % 1 !== 0 || n < 0 || n >= 100){
	return "Ingrese un numero valido entre 1 y 99"
}

  return (n * (n + 1)) / 2; 

}