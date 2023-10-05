/* El método includes() determina si un array incluye un determinado elemento, si, si existe devuelve true de lo contrario retorna un false según corresponda. */

/* También posee un segundo parámetro que es el fromIndex, que es la posición donde comenzar a buscar el valor en el array. */

const pets = ['cat', 'dog', 'bat'];

// Con un FOR 

let contador =  false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    // buscamos el elemento
    if (element === 'dog') {
        contador = true;
        break;
    }
}

console.log('for', contador);


// Con Includes no resive un arrowFuncion si no que solo se le envia el elemento que estamos buscando y ya el determina si existe dentro del array o no existe, funciona para Arrays y para STRING no para objetos ya que se hace muy complejo la verificación

const verificador = pets.includes("dog");
console.log('includes', verificador);

// con el parametro fromIndex, es la posición donde comenzar a buscar el valor en el array. Este fromIndex sí es igual o mayor que el tamaño del array, devuelve false automaticamente sin buscar en el vector. Sí el fromIndex es negativo busca en todo el array. Y para los casos 0, -0, +0 lo toma como cero y también lee todo el array.

[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true


/* 
- Usa includes para cadenas o arreglos de primitivos
- Usa some para arreglos de objetos Es una manera fácil de recordar cuando usar uno u el otro. 
*/