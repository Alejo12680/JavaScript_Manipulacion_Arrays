/* .map()?  lo que hace es TRANSFORMAR.

.map() es INMUTABLE por lo tanto no modifica el array original, sino que crea uno nuevo con la "transformación" aplicada. . Además, mantienes el mismo length que el array original, te devuelve en el nuevo array la misma cantidad que el array que le aplicaste el método.  */

/* Con el metodo nomral de un for  */
const letter = ['a', 'b,', 'c'];

const newArray = [];

for (let item = 0; item < letter.length; item++) {
    const element = letter[item];

    newArray.push(element + '++');    
}

console.log('orignal', letter);
console.log('newMap', newArray);


/* Con el metodo de MAP  */
const newArrayMap = letter.map(item => item + '++');

console.log('orignal', letter);
console.log('newMap', newArrayMap);


/* Ejercicio para el html  */

/* const products = [
    { title: 'Burger', price: 121 },
    { title: 'Pizza', price: 202 },
];
const app = document.getElementById("list");

const list = products.map(product => {

    app.insertAdjacentHTML("afterbegin", 
        `<li>${product.title} - ${product.price}</li>`);
})

list.join(''); */


/* posición de insertAdjacentHTML:

Un DOMString que representa la posición relativa al elemento, y deberá ser una de las siguientes cadenas:
'beforebegin': Antes que el propio elemento.
'afterbegin': Justo dentro del elemento, antes de su primer elemento hijo.
'beforeend': Justo dentro del elemento, después de su último elemento hijo.
'afterend': Después del propio elemento. */

/* El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena. */

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected "Fire,Air,Water"

console.log(elements.join(''));
// expected  "FireAirWater"

console.log(elements.join('-'));
// expected "Fire-Air-Water"

/* RETO: 
Tienes un array de números, tu reto es retornar los números de ese array multiplicados por dos.
Para solucionarlo vas a encontrar una función llamada multiplyElements que recibe un parámetro de entrada:
array: Un array de números
Dentro del cuerpo de la función multiplyElements debes escribir tu solución.
Ejemplo 1:
Input: [2, 4, 5, 6, 8]
Output: [4, 8, 10, 12, 16]

Ejemplo 2:
Input: [1, 1, -2, -3]
Output: [2, 2, -4, -6]*/

/* Resultado: */

function multiplyElements(array) {
    // Tu código aquí👈
    return array.map(numero => numero * 2);
 }
 
 console.log(multiplyElements([2, 4, 5, 6, 8]))


//  Examen de Map

const array = [{age: 1}, {age:2}]; 
const rta = array.map(item => {   
  item.name = 'My name';
  return item; 
})

console.log('Respuesta:', rta);

