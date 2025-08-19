
// Funcion numero mayor del arreglo

// Analizamos las condiciones iniciales
// Arreglo debe ser del largo 10
// Debemos entregar el numero mayor del arreglo


function numeroMay(a,b,c,d,e,f,g,h,i,j){

//Limitamos las variables de ingreso para que no sean mayor a 10 elementos

if (arguments.length !== 10) {
	return "Debe ingresar exactamente 10 números";
  }

// Creamos un array con los numeros ingresados para luego evaluarlos

let numeros =[a,b,c,d,e,f,g,h,i,j]

// Evaluamos las condiciones de entrada, nos aseguramos que sea un numero, no un Not a Number (NaN), que sea entero y positivo
// En este caso usaremos un for para cada valor del array, para no ir 1 por 1

for (let n of numeros)
if (typeof n !== "number" || isNaN(n) || n % 1 !== 0 || n < 0){
	return "Ingrese un numero valido"
}


// Aplicamos las condiciones requeridas
// No se usa for ni while porque no hay que modificar nada, solo buscar

// Agregamos un let en el que guardaremos el numero mayor entre los ingresados
// Usamos Math.Max que indica el numero mayor

let numeroMayor = Math.max (a,b,c,d,e,f,g,h,i,j);


  return `El numero mayor ingresado es ${numeroMayor}`
}