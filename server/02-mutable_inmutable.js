/* En javascript hay unos tipos de datos como:

Primitive type (undefined, null, boolean, number, string, symbol)
Reference type (objects, arrays , functions).

la diferencia entre estas dos es la forma en como se almacenan los datos en memoria

Ejemplo:
*/

let name = 'Javier';
let name2 = name;

let person = {name: 'javier'};
let person2 = person;

/* Cuando creamos name js crea un espacio en memoria y guarda su valor, ahora cuando creamos name2 js continúa crea un nuevo espacio en memoria y asigna el mismo valor de la varible name de esta forma el valor de la variable name2 es totalmente independiente a name.

Ahora si creamos la variable person como un objeto que contiene un name, y si luego creamos otra variable person2 y le asignamos el mismo objeto person, aquí es donde la cosa cambia con respectos a los datos primitivos, en este caso js guardara el objeto person2 como una referencia o apuntador al objeto person, es decir que ambas variables apuntan al mismo objeto en memoria.

Mutable: es algo que se puede cambiar o agregar.
Inmutable: es algo que no puede cambiar ni agregar.

Los valores primitivos en js son algo agregado donde solo se pueden reasignar y por lo tanto, todos estos valores son inmutables.

Ejemplo:
*/

console.log(name); //javier
console.log(name2); //javier

name2 = 'platzi';

console.log(name); //javier
console.log(name2); //platzi''

/* Si imprimimos name y name2, ambas nos dan javier, pero si reasignamos un valor de name2 y volvemos a imprimir ocurre que solo cambia el valor de name2, lo que demuestra que js guardas estás variables de forma separada, aun cuando el valor de name2 se copio de name. Por eso los valores primitivos son inmutables.

ahora hagamos lo mismo con los objetos. */

console.log(person); //{name: 'javier'}
console.log(person2); //{name: 'javier'}

person2.name = 'platzi';

console.log(person); //{name: 'platzi'}
console.log(person2); //{name: 'platzi'}

/* Al inicio obtenemos las mismas propiedades, ahora cambiemos una de las valores de las propiedades y veremos que js cambio el valor tanto de person y peron2, esto debido a que person2 se creo haciendo referencia al objeto person, con reference type js crea una referencia al mismo objeto y el objeto permanece mutable.

ya que el mismo objeto es mutable se puede cambiar o se pueden agregar nuevas propiedades al mismo objeto.

En es6 se creo un operador de propagación que permirte copias un objeto de forma segura sin hacer referencia al mismo objeto y sería así. */

let person2 = {...person}