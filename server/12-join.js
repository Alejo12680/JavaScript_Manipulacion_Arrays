/* El método join() Une todos los elementos de un array en una cadena y retorna esta cadena. Podemos pasarle cualquier elemento como separador que deseemos (por comas, por puntos, por guiones, por slash, etc...).
*/

const elements = ['fire', 'water', 'earth', 'air'];

// con un FOR
let stringUnificado = '';
const separador = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    if (index === elements.length - 1) {
        stringUnificado += element
    } else {
        stringUnificado += element + separador;
    }
}

console.log('union con For:',stringUnificado);


// con Join
const unionJoin = elements.join('--');
console.log('union con Join:', unionJoin);


// El método split() divide un objeto de tipo String en un array de cadenas mediante la separación de la cadena en sub-cadenas, el identifica cual es el separador pueden ser espacios, comas, puntos, guiones etc. Y lo separa en un array de cadenas, en este caso son por espacios.
const title = 'La mañana se nos va echar encima';
let dividido = title.split(' ');

console.log('dividido por split:', dividido);

// combinando las dos funciones

const titleFinal = title.split(' ').join('-').toUpperCase();
console.log('combinación:', titleFinal);


// Otro metodo de Cadenas es el Slice() este extrae el texto de una cadena y devuelve una nueva cadena. Los cambios en el texto de una cadena no afectan a la otra cadena, esto quiere decir que es Inmutable, el slice extrae hasta, pero sin incluir finalTrozo. string.slice(1,4) extrae del segundo carácter hasta el cuarto carácter (caracteres con índice 1, 2 y 3). Si se usa un índice negativo, finalTrozo indica el punto desde el final de la cadena.string.slice(2, -1) extrae desde tercer carácter hasta el último carácter de la cadena.

var cadena1 = "La mañana se nos echa encima.";
var cadena2 = cadena1.slice(3, -4);
console.log('slice:', cadena2);

// otro ejemplo con mas claridad

var cad = "La mañana se nos echa encimas";
cad.slice(-3); // retorna 'mas'
cad.slice(-3, -1); // retorna 'ma'
cad.slice(0, -1); // retorna 'La mañana se nos echa encima'

// ejemplo con array de objetos 

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]


/* El metodo .splice(), no solamente sirve para borrar en cierta forma un elemento sino también para agregarlos al index del array que tu quieres, el método .splice() se utiliza en JavaScript y tiene dos usos principales: eliminar elementos de un array y agregar elementos en una posición específica del array...Ej: */

const holaMundo = ['Maria', 'Andres', 'Cecilia'];
console.log('Original:', holaMundo);
/* Y quizás lo que quieres es añadir a 'Roberto' después de Andres y antes de cecilia. 
Buscamos el index con el findIndex de cecilia tal como el profe nos enseño.
*/

// Buscamos el índice de 'Cecilia' en el array
const index = holaMundo.findIndex(element => element === 'Cecilia');

// Usamos el método splice para agregar 'Roberto' en la posición deseada
holaMundo.splice(index, 0, 'Roberto');

// El array holaMundo ahora contendrá 'Roberto' en la posición correcta
console.log('Agregado:', holaMundo);

/* listo, pones tu index de celcilia, no le ponemos un 1 porque no queremos eliminar ningún elemento hacia la derecha sino un 0, pones la coma y pones el o los elementos que quieres agregar allí. */