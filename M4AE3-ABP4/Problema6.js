
// Funcion arreglo largo n con cada termino siendo el doble que el anterior

// Analizamos las condiciones iniciales
// Arreglo debe ser del largo n
// Primer elemento del arreglo debe ser 1
// Cada termino debe ser el doble del anterior

function arregloDoble (n){

// Evaluamos las condiciones de entrada, nos aseguramos que sea un numero, no un Not a Number (NaN), que sea entero y positivo

if (typeof n !== "number" || isNaN(n) || n % 1 !== 0 || n < 0){
	return "Ingrese un numero valido"
}

// Agregamos un array vacio en donde agregaremos los valores y uno con valoe 1 para iniciar

let arreglo = [];
let valor = 1;

// n es el valor del largo del array, mientras el largo no sea igual se ejecutara la funcion

  while (arreglo.length < n) {
    arreglo.push(valor);	// vamos agregando 1 a 1 los elementos en el array
    valor *= 2; 	// Duplicamos el valor para el próximo ciclo
  }

  return arreglo; // Retornamos con el array arreglo con los valores ingresados en el while

}