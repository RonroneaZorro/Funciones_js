
// Funcion dia de semana segun su numero

// Analizamos las condiciones iniciales
// Arreglo de strings con los dias de la semana (1 lunes - 7 domingo)
// Funcion que devuelva el dia segun el numero ingresado

function diaSemana (numeroDia){

// Evaluamos las condiciones de entrada, nos aseguramos que sea un numero, no un Not a Number (NaN), que sea entero entre el 1 y 7

if (typeof numeroDia !== "number" || isNaN(numeroDia) || numeroDia % 1 !== 0 || numeroDia <= 0 || numeroDia >= 8){
	return "Ingrese un numero valido para el dia de la semana (1-7)"
}

// Agregamos un array con los dias de la semana

let dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

// Aplicamos las condiciones requeridas
// No usamos for ni while poruqe no hay que modificar nada, solo buscar
// Los array parten desde 0, por lo que debemos restarle 1 lunes[0]

let numDia = dias.length [numeroDia-1];

return `El numero ${numeroDia} de la semana corresponde al dia ${numDia}`;
}
