/* Find: retorna el elemento que cumple con la condicion A diferencia de Filter, Find retorna el objeto / elemento directamente y Filter retorna un Array con los elementos.
Find si encuentra mas elementos que cumplan la condicion retorna solo el primer elemento que cumple Si no encuentra un elemento que cumple la condificon retorna undefined 

No olvidar tener en cuenta que el método find retorna la referencia al objeto lo que lo haría MUTABLE, por ejemplo si modificamos el array_2 que toma la referencia del array original y le cambiamos el nombre, entonces el array original será modificado */

/* FindIndex: retorna el indice del elemento (regresa la posicion del elemento en el array) y que cumpla con la condicion de busqueda al igual que find.

FInd cuando no encuentra un elemento retona: undefine
FindIIndex: cuando no encuentra un elemento retorna: -1 */

/* NOTA: para sacar Emojis en VS Code en windows, el comando es: la "tecla Windows + . (punto)"  */


const numbers = [1, 30, 49, 29, 10, 13];

// con un FOR

let rts = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    
    // Si, si lo encuentra que me devuelva el elemenrto
    if (element === 30) {
        rts = element;
        break
    }
}

console.log('for', rts);


// con un Find

let encontrar = numbers.find(item => item === 30);
console.log('find', encontrar);


// Ahora con un array de objetos, find nos funciona super bien cuando hay elementos unicos con un "ID".

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

//   Este será una referencia al objeto original dentro del array products. Es decir, si modificamos ese objeto encontrado por find entonces se estaria modificando el objeto original tambien.

  const comida = products.find(item => item.id === '🌭');
  console.log('Elemento', comida);

//  Para mantener inmutabilidad, sabiendo que el metodo find lo que se nos va a retornar es un objeto, se puede hacer uso en este caso, al ser un objeto sencillo, el shallow copy 👥 con ayuda del spread operator:

const product  = {...products.find(product => product.id === '🍕')};
console.log('inmutable', product);


//   Ahora con findIndex: el no devuelve el elemento como tal, sino la pocision en la que se encuetra el elemento dentro el array
const comidaPosition = products.findIndex(item => item.id === '🌭');
  console.log('Pocision', comidaPosition);
