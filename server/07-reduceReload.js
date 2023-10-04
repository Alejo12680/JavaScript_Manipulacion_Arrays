// Un Histograma: verifica cuantas veces esta un elemento repetido en este caso un número, seria cuantos unos, cuantos dos y asi sucesivamente, esto retorna un objeto que a su vez se puede considerar como un solo valor, para eso nos sirve reduce.

/* output: donde el atributo es el elemento y el valor son las veces que se reiten en el array.
{
    1: 1,
    2: 1,
    3: 2
}

*/

const numbers = [1, 3, 2, 3];

const rts = numbers.reduce((obj, item) => {
    // si no existe el elemento lo inicializamos en uno
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        // Si, si existe, obtenemos el elemento, en el contador que este y le sumamos un uno
        obj[item] += 1
    }

    return obj;
}, {});

console.log(rts);


// Ahora vamos otro ejemplo con objetos, cuantas personas hay en el nivel low, o en el medium o en el hight 
const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];

//   Primero vamos a obtener los elementos primitivos que seria los levels y para esto nos ayuda un map

const niveles = data.map(item => item.level).reduce((elemento, item) => {
    if (!elemento[item]) {
        elemento[item] = 1;
    } else {
        elemento[item] += 1;
    }

    return elemento;
}, {});

console.log(niveles);


// Ahora el ejercicio es por rangos, cuantos elementos hay del 1 al 5, cuandos del 6 al 8 y por ultimo cuantos hay de 9 a 10

const items = [1,2,3,3,4,5,2,1,1,3,4,5,6,7,5,5,4,7,8,9,8,7,5,4,5,8,9]

// Tabien se pueden generar los numero automaticamente asi con un for sin generar el numero cero
const list = [];

for (let i = 0; i < 30; i++) {
    list.push(Math.floor(Math.random() * 10) + 1)    
}
console.log(list);

// Inicializamos el contador que esta al final de todo reduce. Ya iniciado el objeto, ya con los rangos inicializados así se evita preguntar si existe o no.

const objeto = list.reduce((rango, item) => {
    if (item <= 5) {
        rango['1-5'] += 1;
    } else if (item > 5 && item <= 8) {
        rango['6-8'] += 1;
    } if (item > 8 && item <= 10) {
        rango['9-10'] += 1
    } 

    return rango
}, {
    "1-5": 0,
    "6-8": 0,
    "9-10": 0,

});

console.log('rangos', objeto);