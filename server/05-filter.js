/* filter() lo que hace es filtrar el array original en base a una condición, los que la cumplan estaran en el nuevo array creado. . Por lo tanto filter() es inmutable y el nuevo array creado solamente puede contener:

cero coincidencias
todas coincidencias
algunas coincidencias
Pero nunca más coincidencias que el tamaño del array original.
 */

const words = ["spray", "limit", "elite", "exuberant"];

// con un for norma, creamos un nuevo array con palabras que cumplan la condicional:
const newArray = [];
for (let index = 0; index < words.length; index++) {
  const element = words[index];
  if (element.length >= 6) {
    newArray.push(element);
  }
} 

console.log('original', words);
console.log(newArray);


// con el metodo Filter:
const filterWords = words.filter(item => item.length >= 6);

console.log('original', words);
console.log(filterWords);


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

const booleano = orders.filter(item => item.delivered && item.total >= 100)  
//nos trae los datos que esten en true y que tengan un costo igual o mas de 100
console.log('cumple', booleano);

/* . offtopic: el método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda. */

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected true

console.log(pets.includes('at'));
// expected false


// Vamos a crear un buscador sobre este array de objetos, que resive una query que es el string que vamos a buscar
/* const search = (query) => {
  return orders.filter(item => {
    return item.customerName.includes(query)
  })
}

console.log(search('n')); */

// Otro ejemplo mas para terminar de hacer un buscador eficiente
const users = [
	{ name: 'Manuel', lastName: 'Cabos', age: 23 },
	{ name: 'Mario', lastName: 'Palomino', age: 12 },
	{ name: 'Pedro', lastName: 'Carrillo', age: 83 },
	{ name: 'Roberto', lastName: 'Moran', age: 37 },
];

const search_2 = (query) => {
  return users.filter(user => {
    let keyWords = query.toString();

    return user.name.toLowerCase().includes(keyWords.toLowerCase()) || user.lastName.toLowerCase().includes(keyWords.toLowerCase()) || user.age.toString().includes(query.toString());
  })
  
}

console.log('name', search_2('p'));
console.log('lastname', search_2('m'));
console.log('age', search_2(3));
