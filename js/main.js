const notebooks = [
  {id:1, procesador: 'Ryzen 3', precio:850000 },
  {id:2, procesador: 'Ryzen 4', precio:1000000 },
  {id:3, procesador: 'Ryzen 5', precio:1200000 },
  {id:4, procesador: 'Ryzen 3', precio: 880000 },
  {id:5, procesador: 'Ryzen 4', precio:940000 },
  {id:6, procesador: 'Ryzen 5', precio:1100000 },
  {id:7, procesador: 'Ryzen 3', precio:830000 },
  {id:8, procesador: 'Ryzen 3', precio:895000 },
  {id:9, procesador: 'Ryzen 4', precio:930000 },
  {id:10, procesador: 'Ryzen 5', precio:1100000 },
  {id:11, procesador: 'Ryzen 3', precio:830000 },
  {id:12, procesador: 'Ryzen 4', precio:940000 },
  {id:13, procesador: 'Ryzen 5', precio:1250000 },
  {id:14, procesador: 'Ryzen 3', precio:890000 },
  {id:15, procesador: 'Ryzen 4', precio:990000 },
];

console.log(notebooks);

alert("Tenemos para ofrecerte notebooks, las cuales ya estan armadas con sus determinados componentes, ingresa los datos para darte las mejores opciones:")

const tipoProcesador= prompt("Ingresa el tipo de procesador que queres usar contamos con:Ryzen 3, Ryzen 4 y Ryzen 5")
console.log(tipoProcesador);
const precioNot= prompt("Ingresa el dinero maximo que estas dispuesto a invertir (rango min:800000 - rango max:1250000")
console.log(precioNot);

const precioNum = parseInt(precioNot);

const opcionesDisponibles = [];

// Filtrar las notebooks según el procesador y el precio máximo ingresado
notebooks.forEach(notebook => {
    if (notebook.procesador === tipoProcesador && notebook.precio <= precioNum) {
        opcionesDisponibles.push(notebook);
    }
});

// Mostrar las opciones disponibles
if (opcionesDisponibles.length > 0) {
    console.log("Las notebooks disponibles que coinciden con tus criterios son:");
    opcionesDisponibles.forEach(notebook => {
        console.log(`ID: ${notebook.id}, Procesador: ${notebook.procesador}, Precio: $${notebook.precio}`);
    });
} else {
    console.log("Lo sentimos, no hay notebooks disponibles que coincidan con tus criterios.");
}

