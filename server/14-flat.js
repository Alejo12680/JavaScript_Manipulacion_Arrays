/* El método flat es INMUTABLE que consiste en retornar un array donde los sub-arrays han sido aplanados hasta una profundidad especificada. El aplanamiento consiste en transformar un array de arrays a una sola dimensión. 

El método de Arrayinstancias crea una nueva matriz con todos los elementos de la submatriz concatenados en ella de forma recursiva hasta la profundidad especificada.

La profundidad del aplanamiento, por defecto, tiene un valor de 1. Si se desea aplanar todos los sub-arrays en una sola dimensión, utiliza el valor de Infinity.
*/

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Con un For

const newMatriz = [];
for (let i = 0; i < matriz.length; i++) {
    const nivel_1 = matriz[i];
    for (let j = 0; j < nivel_1.length; j++) {
        const element = matriz[i][j];
        newMatriz.push(element);
    }
}

console.log('Con for:', newMatriz);


// Que pasa si hay un array dentro de otro array... sin utilizar la funcion flat() tambien podemos utilizar el método isArray, Para comprobar si una variable es un array, utiliza el método Array.isArray() o el operador instanceof:

/*
 1) Usar el método Array.isArray(variableName) para verificar si una variable es una matriz
Array.isArray(variableName) devuelve true si variableName es un arreglo o una matriz. De lo contrario, devuelve false.
El método Array.isArray() es una forma recomendada de verificar si una variable es un array porque tiene un buen soporte en los navegadores.

A continuación, se muestran algunos ejemplos del uso del método Array.isArray(): 
*/

const ratings = [1, 2, 3, 4, 5];
const vote = { user: 'John Doe', rating: 5 };
const str = "Este no es un array";

console.log(Array.isArray(ratings)); // true
console.log(Array.isArray(vote)); // false
console.log(Array.isArray(str)); // false

/* 
2) Usar el operador instanceof para verificar si una variable es un array
Dado que todas las matrices o arreglos son instancias del tipo Array, puedes usar instanceof para verificar si una variable es un array como esta:
 */

let colors = ['red','green','blue'];

// #1: use Array.isArray
let isArray = Array.isArray(colors);
console.log(isArray); // true;

// #2: use instanceof operator
isArray = colors instanceof Array;
console.log(isArray); // true;

/* La expresión devuelve true si variableName es una matriz. Por ejemplo: */

const ratings_2 = [1, 2, 3, 4, 5];
const vote_2 = { user: 'John Doe', rating: 5 };
const str_2 = "Este no es un array";

console.log(ratings_2 instanceof Array); // true
console.log(vote_2 instanceof Array); // false
console.log(str_2 instanceof Array); // false


// Ahora el reto de resolverlo sin la funcion de FLAT

const matriz_2 = [
    [1, 2, 3],
    [4, 5, 6, [1, 2, 3, [9, 10, 11]]],
    [7, 8, 9, [12, 13, 14, [20, 21, 22]]]
];

const myFlat = (array) => {
    let newArray = [];
    array.forEach((item) => {
        if (Array.isArray(item)) {
            newArray = newArray.concat(myFlat(item));
        } else {
            newArray.push(item);
        }
    })
    return newArray;
}

console.log("for", myFlat(matriz_2));


// Ahora con la funcion Flat(), no importa cuanto niveles haya en el array ellos se van a planar en un solo array, hay que indicarle a flat cuantos niveles debe aplanar, puede llegar hasta 7 niveles.

const matrizFlat = matriz_2.flat(3);
console.log('Matriz con flat:', matrizFlat);

// si no sabemos cuantos niveles puede tener el array, podemos colocar la definicion 'Infinity' para que aplane todos

const matrizSubniveles = [
    1, 2, 2, 3 ,[1, [2,3], [4,[5,[6]]]] 
]

const matrizFlat_2 = matrizSubniveles.flat(Infinity);
console.log('matriz infinita:', matrizFlat_2);

