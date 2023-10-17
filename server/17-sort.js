/* Es un Metodo de Ordenamiento que es Mutable osea que muta el array original y consiste en ordenar un array a partir de los valores Unicode de los caracteres y este retorna un array con la misma referencia en memoria que el original. Este proceso recibe un argumento:

Una función de comparación que compara cada elemento con otro. Por defecto, evalúa el valor Unicode del caracter.
let sortedArray = array.sort(function())
La función comparativa, que recibe como argumento el método sort, utiliza dos parámetros:

El primer elemento a comparar.
El segundo elemento a comparar.
array.sort(function(first, second))
Si la función comparativa retorna un número mayor que 0, entonces el primer elemento se sitúa antes que el segundo. Si es menor que 0, entonces el segundo elemento se sitúa antes que el primero y si a los dos les retorna 0, esto se considera que son iguales. Esto es importante, ya que ordenar los elementos por el valor Unicode provoca resultados inesperados.*/

// Vamos a tener diferentes de diterentes tipos:

// Array de String
const months = ["March", "Jan", "Feb", "Dec"];
// Array de Number
const numbers = [1, 30, 4, 21, 100000];
// Array de String con caracteres
const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
// Array de Objeto
const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];


// Organizar por defecto, por ser un string, lo organiza por el orden de letras en la tabla del codigo ascii, si queremos organizar en el orden de los meses de forma enero, febrero, deberiamos colocar un peso en formato de numero.
months.sort();
console.log(months);

// Ordenamiento por defecto en los numeros, el resultado no es el esperado ya que el ordena deacuerdo a como esta en ascii, para decirle que nos ordene por el peso de cada numero, con un arrow function y siempre se envian dos elementos a comparar, en el caso de los numeros hay que hacer una resta entre A y B. Por ende lo va ordenar
numbers.sort();
console.log(numbers);

// *******************
numbers.sort((a, b) => a - b);
console.log(numbers);

// Si lo queremos ordenar alcontrario seria al réves la logica 
numbers.sort((a, b) => b - a);
console.log(numbers);

// Ordenamiento con caracteres especiales por defecto, hay otra forma de hacerlo por default si el explorador es demaciado viejo hay que ejecutar este comando:  words.sort((a, b) => a.localeCompare(b));
words.sort();
console.log(words);

// Ordenamiento de Objetos, Ordenarlo por el total de compras, cada A y B es el objeto a comparar, queda desde el mayor hasta el menor
orders.sort((a, b) => b.total - a.total);
console.log(orders);


// Funcion para ordenar los meses de forma basica
const meses = ['Febrero', 'Julio', "fsdf", 'Diciembre', 'Enero'];
function monthValue(month) {
    switch (month.toUpperCase()) {
        case 'ENERO':
            return 1;
        case 'FEBRERO':
            return 2;
        case 'MARZO':
            return 3;
        case 'ABRIL':
            return 4;
        case 'MAYO':
            return 5;
        case 'JUNIO':
            return 6;
        case 'JULIO':
            return 7;
        case 'AGOSTO':
            return 8;
        case 'SEPTIEMBRE':
            return 9;
        case 'OCTUBRE':
            return 10;
        case 'NOVIEMBRE':
            return 11;
        case 'DICIEMBRE':
            return 12;
        default:
            //Cualquier valor que no coincida se irá de último
            return 13; 
    }
}
meses.sort((a, b) => monthValue(a) - monthValue(b))
console.log(meses);


//********** */ Otra forma de solucion avanzada *************
const mes = ["Marzo", "Junio", "Febrero", "diciembre"];
 const valueMes= mes =>{
    const meses = mes.toUpperCase();
        const mesMayus= {
            ENERO: 1,
            FEBRERO:2,
            MARZO:3,
            ABRIL:4,
            MAYO:5,
            JUNIO:6,
            JULIO: 7,
            AGOSTO:8,
            SEPTIEMBRE:9,
            OBTUBRE:10,
            NOVIEMBRE:11,
            DICIEMBRE:12,
        }
        return mesMayus[meses] || undefined;
 }

 console.log(valueMes('Enero'));
    mes.sort((a,b)=>{
        return valueMes(a) - valueMes(b);
    });
    console.log(meses)


// Ordenar por fechas en un objeto 
const ordenes = [
    {
      customerName: "Nicolas",
      total: 600,
      delivered: true,
      date: new Date (2021, 3, 8, 4),
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
      date: new Date (2021, 9, 12, 3),
    },
    {
      customerName: "Santiago",
      total: 1840,
      delivered: true,
      date: new Date (2021, 8, 2, 2),
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
      date: new Date(2021, 1, 1, 9, 30),
    },
  ];
  ordenes.sort((a, b) => b.date.getTime() - a.date.getTime());
  console.log(ordenes);
