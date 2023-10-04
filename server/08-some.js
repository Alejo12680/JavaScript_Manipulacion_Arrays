/* SOME este método nos devuelve true o false sí al menos 1 elemento de nuestro array cumple con la condición. */

const array = [1, 2, 3, 4, 5];

// Vamos a evaluar si almenos algun numero es par, si es asi, nos da true, sino va arrojar false.

// FOR

let rts = false;
for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (element % 2 === 0) {
        rts = true;
        break
    }
}
console.log(rts);

// Con SOME

let numPar = array.some(item => item % 2 === 0);
console.log('Some', numPar);

// Ahora vamos a ver con objetos la funcion SOME

const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

//   Some solo imprime true o false;
const pedido = orders.some(item => item.delivered);
console.log('Fue entregado', pedido);

// Otro ejercicio mas complejo utilizando una libreria que seria para las fechas, la funcion es que se pueda agendar sin que se cruce con otra fecha. Primero instalamos la libreria (npm install date-fns --save) en la terminal.

const citas = [
    {
        startDate: new Date(2023, 1, 1, 10),
        endDate: new Date(2023, 1, 1, 11),
        title: "Cita de trabajo",
    },
    {
        startDate: new Date(2023, 1, 1, 15),
        endDate: new Date(2023, 1, 1, 15, 30),
        title: "Cita con mi jefe",
    },
    {
        startDate: new Date(2023, 1, 1, 20),
        endDate: new Date(2023, 1, 1, 21),
        title: "Cena",
    },
];

const newAppointment = {
    startDate: new Date(2023, 1, 1, 19),
    endDate: new Date(2023, 1, 1, 20, 30),
}

// Vamos a utilizar una funcion llamada overlappi de la libreria date-fns documentancion link (https://date-fns.org/v2.30.0/docs/areIntervalsOverlapping)
var areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

// Despues de llamar la funcion de date-fns creamos la funcion con SOME para validar las fechas, se especifica la nueva fecha que es la que se va evaluar, por cada una de las fechas si se sobre pone con la fecha nueva.
const isOverlap = (newDate) => {
    return citas.some(date => {
        return areIntervalsOverlapping(
            // Sus párametos de entradas son las fechas star y end del array de citas y se evalua con la fecha que se pretenda agendar.
            { start: date.startDate, end: date.endDate },
            { start: newDate.startDate, end: newDate.endDate }
        )
    })
}

// Si da true, esto quiere decir que se sobre pone a una fecha y no se puede agendar, tiene que dar false para poder agendar la cita sin que se sobreponga a una fecha ya agendada.
console.log('Citas', isOverlap(newAppointment));

