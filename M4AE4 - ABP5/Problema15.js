
// Funcion tabla de multiplicar hasta 12

// Analizamos las condiciones iniciales
// crean tabla de multiplicar de n hasta 12
// consideramos n entero mayor o igual a 1


function tablaMul12(n){

// Evaluamos las condiciones de entrada, nos aseguramos que sea un numero, no un Not a Number (NaN), que sea entero y positivo

if (typeof n !== "number" || isNaN(n) || n % 1 !== 0 || n < 0){
	return "Ingrese un numero valido"
}

  let resultado = "";

  for (let i = 1; i <= 12; i++) {
    resultado += `${n} x ${i} = ${n * i}\n`;
  }

  return resultado;
}