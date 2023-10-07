/* El método flatMap es inmutable y consiste en la combinación de los métodos map y flat. Primero realiza la iteración de los elementos del array (como si fuera map), y después los aplana en una sola profundidad (como si fuera flat).

Este procedimiento recibe los mismos argumentos que el método map.

Cuidado con el método flatMap, primero realiza el map y luego el flat.
 */

const numbers2 = [1,[2,3], 4, 5]
numbers2.flatMap(number => [number *2]) 
// [ 2, NaN, 8, 10 ]
// * Recuerda: NaN = No a Number

// El flatmap tiene las propiedades de la funcion Map() y de Flat()
const users = [
    {userId: 1, userName: "Tom", attributes: ['Nice', 'Cute']},
    {userId: 2, userName: "Mike", attributes: ['Lovery']},
    {userId: 3, userName: "Nico", attributes: ['Nice', 'Cool']},    
];

// Solucion Normal:
const atributos = users.map((item) => item.attributes).flat();
console.log('Normal Respuesta', atributos);

// Con Flatmap: Solo declaramos como en map el item con su atributo que necesitamos iterar
const atributos_2 = users.flatMap((user) => user.attributes);
console.log('Flatmap Respuesta', atributos_2);


/*  
El Object.values()método estático devuelve una matriz de valores de propiedad con clave de cadena enumerables propios de un objeto determinado.
*/

const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
  };
  
  console.log(Object.values(object1));
  // Expected output: Array ["somestring", 42, false]

  /* 
  El Object.keys()método estático devuelve una matriz de los nombres de propiedades enumerables con clave de cadena propios de un objeto determinado.
   */

  const object2 = {
    a: 'somestring',
    b: 42,
    c: false,
  };
  
  console.log(Object.keys(object2));
  // Expected output: Array ["a", "b", "c"]


// Ejercicio de flatmap, para recorrer un objeto con dos arrays, solucionar este reto vamos a utilizar Object.keys() y Object.values()

const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

// Solucion, con Object.values pordemos obtener los arrays de los valores de los elemento, luego podemos ejecutar un flat() y obtenemos un array con las fechas startDate en un solo array de forma lineal, ahora solo queremos un array con solo las fechas de startDate, para eso utilizamos mejor un FlatMap que nos itera solo los elementos de startDate, pero nos arroja un Undefiend, esto quiere decir que flatmap no se le puede decir que nivel recorrer, como 'item' es un array podemos ejecutar un map interno, al mapearlo con map ya el flatmap puede aplanar todo en un solo array de fechas.

const solucion_1 = Object.values(calendars).flatMap(item => {
    return item.map(date => date.startDate);
})
console.log(solucion_1);

// Otra Posible solucion seria:
const rta3 = Object.values(calendars).flat().flatMap(item => item.startDate);
console.log(rta3);

// Otra Solucion seria:
const rtaReto = Object.values(calendars).flat().map(item => item.startDate);
console.log(rtaReto);

// Ultima Solucion:
const rta2 = Object.values(calendars).flatMap(item => item.map(item => item.startDate));
console.log(rta2);




