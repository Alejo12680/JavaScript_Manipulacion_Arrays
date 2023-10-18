/* Este método REDUCE, efectivamente hace eso. Solo reduce a un solo valor y no devuelve otro array, simplemente un valor.
 Se utiliza muchísimo para hacer cálculos a partir de la información de un array. En su composición, tiene como argumentos de la función del primer parámetro, al acumulador y como segundo parámetro al elemento por el que va iterando el loop. Y como segundo argumento del reduce(), se pasa el valor inicial del acumulador. es un Metodo Inmutable.
 */

// con un FOR
const totals = [1, 2, 3, 4, 5]

let acumulador = 0;

for (let item = 0; item < totals.length; item++) {
    const element = totals[item];

    acumulador += element;
}

console.log(acumulador);


// con REDUCE

// primer argumento de la reduce() es el acumulador
// segundo argumento de la reduce() es el elemento
// segundo parámetro de la reduce() es el estado inicial del acumulador

const sum3 = totals.reduce((acumula, element, index) => {

    console.log('acumula', acumula);
    console.log('element', element);
    console.log('estado inicial', index);
    console.log('acumula + element: ', acumula = acumula + element);
    return acumula;
}, 0);
console.log('sum3', sum3);


// la funcion de REDUCE
const reduce = totals.reduce((acumulador, item) => acumulador + item, 0) // el cero '0' es el estado inicial
console.log('reduce', reduce);


// Otra forma de ver como itera el reduce es esta 
const total = [1, 2, 3, 4]

const suma = total.reduce((acumulador, item, indice) => {
    console.log(acumulador, item, indice)
    return acumulador + item
}, 0)

console.log('suma total:', suma)
