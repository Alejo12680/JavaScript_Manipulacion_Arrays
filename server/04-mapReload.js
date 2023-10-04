/* Usos comunes o clásicos de map() sobre los arrays:

Limpiar datos: 
seleccionar datos dentro de un array y devolverlos para su utilización en futuras acciones.

Añadir un nuevo elemento: 
modificar agregando un nuevo dato al objeto pero sin modificar el array original. */


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

  console.log('origenes', orders);

const totales = orders.map(item => item.total);
console.log('totales', totales);

// Que pasa si queremos añadir otro campo, como map es una referencia en memoria y trae los datos, mas no es otro espacio en memoria que crea más elementos, esto solo pasa con los objetos y no con los valores primitivos.

// mala practica cuando copia la referencia y modifica los dos arrays y añasirle un nuevo campo al objeto.

const incorrecto = orders.map(item => {
  item.tax = .19;
  return item;
})

console.log('malapractica', incorrecto);

// Muto el array original:
console.log('origenes', orders);

// Para solucionar esto y no copiar la referencia del objeto vamos a realizar generando un nuevo objeto con el sprit operation, clonamos los atribuno del objeto, sin la referencia en memoria, copiamos un nuevo objeto.

const correcto = orders.map(item =>   ({
  ...item,
  tax: .19
}))

console.log('buenapractica', correcto);

// NO muto el array original porque copiamos el objeto sin la referencia en memoria:
console.log('origenes', orders);


// Ejercicio:
/* Tienes un array de objetos que representan datos de productos con los siguientes atributos:
name
price
stock
Tu reto es agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19% con base al precio base y debes tener en cuenta que como resultado se debe dejar un valor entero, sin decimales.

Por ejemplo si aplicamos el 19% de impuestos para un producto con precio de $1000 el resultado de los "taxes" será $190, o para un producto con precio de $656 el resultado de los "taxes" será $124. */

const Input =
[
  {
    name: "Product 1",
    price: 1000,
    stock: 10
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20
  }
]

Output:
[
  {
    name: "Product 1",
    price: 1000,
    stock: 10,
    taxes: 190
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20,
    taxes: 380
  }
]

// Solucion:
// La función Math.trunc() devuelve la parte entera de un numero removiendo cualquier dígito decimal (dígitos situados después de la coma).

function addNewAttr(array) {
  const impuesto = array.map((item) => ({
      ...item,
      taxes: Math.trunc(item.price * .19)
    })
  )
  return impuesto
}

console.log('impuesto', addNewAttr(Input));


/* Respuesta de un compañero menos eficiente pero puedo servir en el futuro:

export function addNewAttr(array) {
  const impuesto = array.map((item) => {
    return {
      ...item,
      taxes: Math.trunc(item.price * .19)
    }
  })
  return impuesto
}

*/
