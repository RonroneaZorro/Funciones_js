
// Función número primo


// Analizamos las condiciones iniciales
// El número debe ser divisible solo por 1 y por si mismo

function numPrimo(n){

// Evaluamos las condiciones de entrada, nos aseguramos que sea un numero, no un Not a Number (NaN), que sea entero y positivo

if (typeof n !== "number" || isNaN(n) || n % 1 !== 0 || n < 0){
	return "Ingrese un numero valido mayor que 1"
}

// Evaluamos con for si es hay algun divisor entre 2 y n-1
// si existe alguno, no es primo 

 for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            
            return `El número ${n} no es primo.`;
        }
    }
    return `El número ${n} es primo.`;
}