/* Metodos que son mutables, que modifican el array original y los inmutables para objetivo de busquedas, vamos a tener dos arrays 
 */

// Array de productos:
const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

console.log("products", products);


// Array de los productos que se vayan eligiendo:
const myProducts = [];
const myProducts_2 = [];

console.log("myProducts", myProducts);
console.log("-".repeat(10));

/* EL objetivo es sacar del array de productos y pasarlos a mis productos personales, como si fuera un carritos de compras; 
Las funciones mutables consisten en cambiar el array original. Estos métodos son:

push
unshift
pop
shift
splice
sort

Empezamos con los metodos Mutables: 
Se va Realizar una busqueda de items e iniciamos con FIND
*/

// Necesito que me devuelva el elemento con el ID
const producto = products.find((item) => item.id === '🍔');
// si lo encuentra lo agregamos al carrito myproducts, el metodo que se utiliza es el push(), que muta el array

if (producto) {
    myProducts.push(producto);
}

console.log('myProducts:', myProducts);

// ahora hay que hacer que cuando se agregue al carrito, se borre del array original de productos, osea una vez agregado sea eliminado, con el metodo splice() este busca la posicion en el array en el primer parametro, luego en el segundo parametro, es cuantos elementos quiero eleminar, apartir de esa ubicacion, en este caso es 1. pero para saber la posicion en el array debemos utilizar el findIndex(), pero tambien necesitamos agregar ese producto en myproducts, pero ya con la posicion podemos decir antes de que elimine que el producto, con la posicion que ya tenemos, indicarle que lo agregue y estos metodos push y splice son mutables, menos el metodo findIndex.

const itemProducto = products.findIndex((item) => item.id === '🍕');

// Si no lo encuentra retorna un menos uno, entonces puedo eliminar un producto
if (itemProducto !== -1) {
    myProducts_2.push(products[itemProducto]);
    products.splice(itemProducto, 1);
}

console.log("products", products);
console.log('myProducts_2:', myProducts_2);


// ahora el reto es eliminar sin mutar el array original, esto se logra con filter()

const products_2 = [
    { title: 'Pollo', price: 121, id: '🍗' },
    { title: 'Carne', price: 121, id: '🥩' },
    { title: 'Helado', price: 121, id: '🍨' },
];

const productoFiltrado = products_2.filter(item => item.id != '🥩')

console.log('original:', products_2);
console.log('Filtrado Carne:', productoFiltrado);  


// Ahora vamos hacer un Update, esta actualizacion va sobre el Id que se indica para hacer los cambios del objeto, para poder actulizar nos apoyamos del index y con ello utilizamos el findIndex() que me busque el id y me lo traiga, ya con la posicion le enviamos el objeto actualizado.

const products_3 = [
    { title: 'Pollo', price: 121, id: '🍗' },
    { title: 'Carne', price: 121, id: '🥩' },
    { title: 'Helado', price: 121, id: '🍨' },
];

const updateProducto = {
    id: '🥩',
    changes: {
        price: 250,
        description: 'proteina animal',
    }
}

// saber la posicion del objeto
const productIndex = products_3.findIndex(item => item.id === updateProducto.id);

// La actualizado, del objeto; esto es mutable y no respeta nada solo catualiza lo que la estructura tiene 

products_3[productIndex] = updateProducto.changes;

console.log('Producto Original', products_3);
console.log('Producto Actualizado Mutable', products_3);

// Para que cuando actualicemos respete las pocision con los atribbutos que tiene el objeto, copiamos un nuevo objeto con los elementos del anterior, es decir la misma posicion, resptando lo que ya habia y aplicamos los cambios, con esto un fucion entre el estado anterior y los cambios que se agregan, para ejecutar esto hay que comentar las lineas de arriba de la 93 a 96

products_3[productIndex] = {
    // Misma posicion
    ...products_3[productIndex],
    // respetar los cambios
    ...updateProducto.changes,
}

console.log('Producto Original Muto', products_3);
console.log('Producto Actualizado Mutable', products_3);

// Todo esto muto el array original, ahora como se puede hacer sin que Mute el array original, para esto hay que comentar las lineas de arriba tanto las 100 a 108, como las anteriores

const cambiosInmutables = products_3.map(item => {

    if (item.id === updateProducto.id) {
        /* console.log('retornacon cambios'); */
      return {
        ...item,
        ...updateProducto.changes,
      }
    }
    /* console.log('retornar sin cambios'); */
    return {...item};
  })

  console.log('Producto Actualizado Inmutable', cambiosInmutables);
  console.log('Producto Original Inmutable', products_3)
  


