
// Funcion encontrar elemento en Array

// Conodiciones iniciales
// Elementos solo seran numeros
// El largo del arreglo es de 100 numeros

function buscarArreglo(buscarNum){

alert(
    " Antes de usar esta función, asegúrate de ingresar los parametros correctos:\n" +
    "-Los numeros ingresados: deben ser números enteros y no texto\n" 
);


// Se evaluan las condiciones de entrada (variables de la funcion)

if (typeof buscarNum!== "number" || isNaN(buscarNum) || buscarNum% 1 !== 0){
	return "Ingrese un numero valido"
}

// Agregamos variables vacias o variables de entrada
// Creamos un arreglo largo de 100 elementos
// Array.from(valores del array,funcion que ingrese numeros al array), en este caso de largo 100 y numeros al azar
// Math.random entrega un valor entre 0-1
// Math.floor arregla los numeros y los convierte en enteros
// Al multiplicar por 100 creamos 100 elementos y le sumamos 1 para partir desde el 1 (ya que los valores van entre 0-1)

let arreglo = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100) + 1);


// En html podemos ir pidiendole al usuario a traves de un input (inputArreglo) los numeros para el arreglo
// getElementById("inputArreglo").value obtiene el valor del input como "string"
// .slpit crea una separacion entre los elementos, en este caso una coma (",")
// .map(Number) convierte los elementos a numeros (vienen como string)
//let arreglo = document.getElementById("inputArreglo").value.split(",").map(Number); 

// Aplicamos las condiciones requeridas

// Actualmente no lo usaremos ya que anteriormente definimos el arreglo de 100 elementos
// Es valido cuando usemos input
//if (arrego.length > 100){
//	return "El arreglo contiene mas elementos del permitido (100)"
//}

// Como no conocemos los valores aleatorios que nos entregara el arreglo
// Los imprimieremos en pantalla para que el usuario compruebe entre que numeros esta buscando
// Crearemos varios bloques de 10 numeros para poder visualizar donde se esta buscando
// .slice permite crear bloques a partir de uno mas grande

console.log ("Los 100 numeros del array son:");

for (let i = 0; i < arreglo.length; i += 10) {

  let bloque = arreglo.slice(i, i + 10);
  
// Imprimimos el bloque de 10 numeros separados por coma
  console.log(`${i + 1} a ${i + 10}:`, bloque.join(", "));
}

// Se agregan if para determinar si el numero se incluye dentro del arreglo
// .includes verifica si un valor pertenerce al arreglo, funciona como booleano (true o false)

if (arreglo.includes(buscarNum)){
	return `Tu numero ${buscarNum} pertenece al conjunto de elementos del arreglo` // true
	}else {
	return `Tu numero ${buscarNum} no pertenece al conjunto de elementos del arreglo` // false

}
}




