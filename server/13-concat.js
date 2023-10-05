/* El método Concat es inmutable y consiste en crear un nuevo array a partir de la unión de otros valores o arrays especificados como argumentos. 
Recordar que al ser inmutable, los arrays (tanto el nuevo como el viejo) quedaran referenciados por memoria, por lo tanto sí modificamos alguno de los dos, los cambios se verán reflejados en ambos.
 */

// Con un For
const array_1 = [1, 2, 3, 4];
const array_2 = ['a', 'b', 'c', 'd'];

// referenciamos el primer array con el Sprit Operation
const newArray = [...array_1];

for (let i = 0; i < array_2.length; i++) {
    const element = array_2[i];

    newArray.push(element);
}

console.log('union de array con el for:', newArray);


// Con la funcion Concat, Aca se ejecuta la referencia en memoria y ejecuta dos veces el array_2, para que no tenga esa referencia tenemos que operar con el Sprint Operation para que no genere ese doble referencia de array_2 y se la colocamos al for de arriba, para que no nos genere error con el Concat.

const nuevoArray = array_1.concat(array_2);
console.log('union de array Concat:', nuevoArray);

// Concat con el SpreadOpration

const nuevoArray_2 = [...array_1.concat(array_2)];
console.log('union de array Concat SpreadOperation:', nuevoArray_2);

// Concatenacion Normal con el SpreadOpration

const nuevoArray_3 = [...array_1,...array_2];
console.log('union de array Normal con SpreadOperation:', nuevoArray_3);

// tener cuidado que lo que se envian con el spreadoperation porque si se envia otra elemento puede generar un error en el lectura como por ejemplo si le enviamos un string con el array, debe estar seguro que lo que vamos a obtener es un array

const nuevoArray_4 = [...array_1, 'hola'];
console.log('error concatena el string:', nuevoArray_4);

const nuevoArray_5 = [...array_1, ...'hola'];
console.log('error divide el string en subCadenas:', nuevoArray_5);


// que pasa si queremos MUTAR el array original, Lo podemos hacer con el SpreadOperation, pero tambien se puede con un push pero esto conlleva a que integre el array dentro otro array, mientras que con el SpreadOperation el deja un array_1 muta con la fusión de array_2.

/* array_1.push(array_2);
console.log('mutar el original:', array_1); */

// con SpreadOperation
array_1.push(...array_2);
console.log('mutar el original con spreadOperation:', array_1);
