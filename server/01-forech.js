// Vamos a crear un array de elementos
const letter = ["a", "b", "c"];

// realizamos un for sencillo para ver la diferencia con un forech, dinde el itera las veces necesarias dependiendo de la logitud del array
for (let index = 0; index < letter.length; index++) {
  const element = letter[index];
  console.log("con un for normal: " + element);
}

// Hacemos lo mismo con un forech que nos ahorra mas lineas y proceso de codigo
letter.forEach((element) => {
  console.log(`con un forech ${element}`);
});

// Ejercicio
const animals = [
  { title: "leon", preci: 5000, check: true },
  { title: "vaca", preci: 7800, check: false },
  { title: "pollo", preci: 2500, check: true },
  { title: "conejo", preci: 8700, check: false },
];

// vamos a iterarlo
const app = document.getElementById("list");

// recorremos el array y en el checkbox aplicamos una condicional ternaria
animals.forEach((object) => {

  app.insertAdjacentHTML("afterbegin",
  `<li> 
        animal: ${object.title} y
        precio: ${object.preci} - 
        <input type="checkbox" ${object.check ? 'checked' : ''} />
    </li>`
  );
});

window.print('hola')

// funcion alternativa mas eficiente
/* tasks.forEach(({ title, done }) => {
    const element = `
         <li>
          	 <input type='checkbox' id='${title}' name='${title}' ${done && 'checked'} />
                  <label for='${title}' >${title} </label>   
         </li>`;
app.insertAdjacentHTML('beforeend', element);}); */


/* posición de insertAdjacentHTML:

Un DOMString que representa la posición relativa al elemento, y deberá ser una de las siguientes cadenas:

'beforebegin': Antes que el propio elemento.
'afterbegin': Justo dentro del elemento, antes de su primer elemento hijo.
'beforeend': Justo dentro del elemento, después de su último elemento hijo.
'afterend': Después del propio elemento. */