
// Funcion para convertir dolares en peso chileno

function convertidorDolarClp(montoUSD) {

	const cambioDlsClp = 745; // constante del cambio
	
// Validamos los numeros, 
// if evalua condiciones para ejecutarse
// typeof verifica que el valor sea del tipo "number"
// !== implica negacion (distinto)
// || realiza la condicion si cumple uno u otro avanza con el if
// isNaN() verifica el valor no sea un numero, si no lo es arroja error

if (typeof montoUSD !== "number" || isNaN(montoUSD)) {
    return "Error: Por favor, ingrese un monto numérico válido en dólares."; // retorna un mensaje
  }

// Nos aseguramos que el numero sea positivo
if (montoUSD < 0) {
        return "Error: El valor no puede ser negativo.";
    }

// Aplicamos la conversion multiplicando el valor del dolar por el cambio

 const montoCLP = montoUSD * cambioDlsClp;

// Como en peso chileno no hay decimales, se rendondea
// Math.round() redondea al entero más cercano

return Math.round(montoCLP) // retorna el valor en peso chileno
}

//Ejecutar directamente en el JS

convertidorDolarClp (300) // Ejecuta la funcion y retornara un resultado segun corresponda

