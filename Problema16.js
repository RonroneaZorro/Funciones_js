
// Función reservas en un cine

// Conodiciones iniciales/Requerimientos
// Objeto con propiedades de  nombre, sala y capacidad por sala
// Objeto sala que identifique asientos disponibles/reservados
// Métodos para mostras asientos disponibles, reservar y cancelar asientos

// Definimos la Sala 1, Sala 2 y luego las incorporamos en Cine
// Dejamos asientos reservados de forma aleatoria

let sala1 = {
    id: "Sala 1",
    asientos: []
};


let filas = ['A', 'B', 'C', 'D', 'E']; // 5 filas con 5 asientos cada una
for (let fila of filas) {
    for (let i = 1; i <= 5; i++) {
        sala1.asientos.push({
            numero: fila + i,
            reservado: Math.random() < 0.3 // reserva aleatoria
        });
    }
}

let sala2 = {
    id: "Sala 2",
    asientos: []
};

for (let fila of filas) {
    for (let i = 1; i <= 5; i++) {
        sala2.asientos.push({
            numero: fila + i,
            reservado: Math.random() < 0.3 // reserva aleatoria
        });
    }
}

let cine = {
    nombre: 'Cine Local',
    asientosPorSala: 25,
    salas: {
        sala1: sala1,
        sala2: sala2
    }
};

//definir asientos por sala, la sala tiene que tener id, ademas por fila A tiene 5 asientos, B tiene 5 asientos,...
//definir reservados, que hayan asientos reservados de forma aleatoria

// Se agrega la function

function mostrarDisponibles(sala) {
    console.log("\nAsientos disponibles");
    console.log("---Pantalla---");

    const filas = ['A', 'B', 'C', 'D', 'E'];

    for (let fila of filas) {
        let filaAsientos = sala.asientos
            .filter(asiento => asiento.numero.startsWith(fila))
            .map(asiento => asiento.reservado ? 'X' : asiento.numero);

        console.log(filaAsientos.join(' '));
    }
    console.log(""); // Salto de línea al final
}


function reservarAsiento(sala, numAsiento){

	const asiento = sala.asientos.find( asiento => asiento.numero === numAsiento);
	if (!asiento){
		console.log(`No existe el asiento seleccionado`)
		return;
	}
	if (asiento.reservado){
		console.log(`El asiento ${numAsiento} se encuentra reservado`);
	}else{
		asiento.reservado = true;		// Cambiamos el estado de disponible a reservado
		console.log(`El asiento ${numAsiento} se reservo con exito en la sala ${sala.id}`);
		return;
	}
}
	
function cancelarAsiento(sala, numAsiento){

	const asiento = sala.asientos.find( asiento => asiento.numero === numAsiento);
	if (!asiento){
		console.log(`No existe el asiento seleccionado`)
		return;
	}
	if (!asiento.reservado){
		console.log(`El asiento ${numAsiento} no se encuentra reservado`);
	}else{
		asiento.reservado = false;	// Cambiamos el estado de reservado a disponible
		console.log(`Se cancela la reserva del asiento ${numAsiento} en la sala ${sala.id}`);
		return;
	}
}

console.log(`Bienvenidos a ${cine.nombre}`);

console.log(`Sala 1`);
mostrarDisponibles(cine.salas.sala1);

console.log(`Sala 2`);
mostrarDisponibles(cine.salas.sala2);

console.log(`Intentamos reservar el asiento A1 de la sala 1`);
reservarAsiento(cine.salas.sala1, "A1");

console.log(`Intentamos reservar el asiento B3 de la sala 2`);
reservarAsiento(cine.salas.sala2, "B3");

console.log(`Intentamos cancelar el asiento A1 de la sala 1`);
cancelarAsiento(cine.salas.sala1, "A1");


console.log(`Intentamos cancelar el asiento B3 de la sala 2`);
cancelarAsiento(cine.salas.sala2, "B3");

console.log(`Nuevamente se intentamos cancelar el asiento B3 de la sala 2`);
cancelarAsiento(cine.salas.sala2, "B3");

console.log(`Intentamos reservar el asiento F1 de la sala 1 que NO EXISTE`);
reservarAsiento(cine.salas.sala1, "F1");
