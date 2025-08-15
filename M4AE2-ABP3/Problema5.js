
// Funcion para calcular resultado de partido de tenis

// Analizamos las condiciones iniciales
// Jugador A gano m juegos
// Jugador B gano n juegos
// El primero que llegue a 7 gana o diferencia de 2 despues de los 7


function partidoTenis (m,n) {

alert ("Los valores de los partidos ganados deben ser numeros enteros positivos \ )
// Evaluamos las condiciones de entrada, nos aseguramos que sea un numero, no un Not a Number (NaN), que sea entero y positivo

if (typeof m !== "number" || isNaN(m) || m % 1 !== 0 || m < 0){
	return "Ingrese un numero valido para los juegos ganados del Jugador A"
}

if (typeof n !== "number" || isNaN(n) || n % 1 !== 0 || n < 0){
	return "Ingrese un numero valido para los juegos ganados del Jugador B"
}

// Si uno llega a los 7, no puede existir una diferencia mayor a 2
// Math.abs retorna el valor absoluto, numero positivo 

if ((m >= 7 || n >= 7) && Math.abs(m - n) > 2){ 
	return "Los valores exceden lo permitido, no puede haber una diferencia mayor a 2 despues de los 7 set"
}

// Aplicamos las condiciones requeridas

// Condiciones para que gane el Jugador A

  if ((m === 7 && n <= 5) || (m >= 7 && n === m - 2)) {
    return `El jugador A gana ${m} sets a ${n}`;
  }

// Condiciones para que gane el Jugador B

  if ((n === 7 && m <= 5) || (n >= 7 && m === n - 2)) {
    return `El jugador B gana ${n} sets a ${m}`;
  }

// Si no se cumplen las condiciones de victoria

  return "El partido aún no termina";
}