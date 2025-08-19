
// Funcion para ordenar ascendentemente los numeros de un arreglo

// Conodiciones
// Ordenar un arreglo ascendente

function ordenarArreglo (){

// Agregamos variables vacias o variables de entrada

// Se genera un array aleatorio de 10 números para realizar el ejemplo

let arreglo = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10) + 1);

console.log("Los numeros del arreglo son:");
console.log(arreglo);

// Aplicamos las condiciones requeridas

// Ordena ascendentemente usando sort()
// sort modifica la funcion, sin especificaciones ordena alfabeticamente

 arreglo.sort((a, b) => a - b);

 console.log("Arreglo ordenado ascendentemente:");
 console.log(arreglo.join(", "));

}