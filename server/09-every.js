/*  Este método es el contrario a some(), retorna un true o false sí TODOS los elementos del array cumplen la condición. NO si alguno lo cumple tienen que ser TODOS */

const numbers = [1, 30, 49, 29, 10, 13];

// Con un FOR
// inicializamos una variable suponiendo que todos cumplen con la petición de que todos sean menores o iguales a 40

let peticion = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    
    if (element >= 40) {
        peticion = false;
    }
}
console.log('for', peticion);


// Con Every
// aca el every pide la condicion que deben cumplir no es como el for que debe validar para desmentir la hipotesis primera del let peticion = true;

const peticion_2 = numbers.every(item => item <= 40)
console.log('every', peticion_2);


// En este ejercicio con objetos vamos a evaluar que todos los integrantes sean menores de 18 años para que nos de true, de lo contrario nos dara false.

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];


const allAreYounger = team.every(item => item.age < 18);
console.log('todos son menores de 18 años:', allAreYounger);

/* Otro ejemplo es retornar true si dentro de array de números todos son pares, para solucionarlo vas a encontrar una función llamada checkArray que recibe un parámetro de entrada:

numbers: Un array de números
Dentro del cuerpo de la función checkArray debes escribir tu solución. */

/* Ejemplo 1: */
let array = [2, 4, 6, 8, 10];
/* Output: true */

/* Ejemplo 2: */
/* let array = [1, 3, 5, 7, 10, 11]; */
/* Output: false */

/* Ejemplo 3: */
/* let array = [1, 3, 5]; */
/* Output: false */

/* Ejemplo 4: */
/* let array = []; */
/* Output: false */ 


const checkArray = (array) => {
    if (array.length === 0) {
        return false;
    }
    return array.every(numbers => numbers % 2 === 0)
}

console.log('prueba da', checkArray(array));