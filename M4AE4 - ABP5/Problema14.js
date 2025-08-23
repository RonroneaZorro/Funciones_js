
// Funcion sumatoria de pares hasta n

// Analizamos las condiciones iniciales
// n entero debe ser mayor a 10 y menor que 1000
// sumar los pares contenidos en el rango
// consideraremos el rango desde 1 hasta n

function sumarPares(n){

// Evaluamos las condiciones de entrada, nos aseguramos que sea un numero, no un Not a Number (NaN), que sea entero y positivo

if (typeof n !== "number" || isNaN(n) || n % 1 !== 0 || n <= 10 || n >= 1000){
	return "Ingrese un numero valido mayor que 10 y menor que 1000"
}

// Creamos una array con valor 0 para ir sumando los numeros pares

let suma = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) { 
      suma += i;
    }
  }

  return `La suma de los pares hasta ${n} es: ${suma}`;
}