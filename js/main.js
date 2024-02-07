alert("Bienvenido a Lelsi Gaming, la página donde podrás seleccionar los productos que quieres utilizar para armar tu próxima computadora");

let nombre = prompt("Ingresa tu nombre");
console.log(nombre);

let apellido = prompt("Ingresa tu apellido");
console.log(apellido);

let documento = prompt("Ingresa tu DNI");
console.log(documento);

let edad = prompt("Ingresa tu Edad");
console.log(edad);

let monitor = prompt("Seleccione la marca deseada de monitor: HP, Lenovo, Samsung");
console.log(monitor);

let teclado = prompt("Seleccione marca deseada de teclado: Antryx, HyperX, Ducky");
console.log(teclado);

let mouse = prompt("Seleccione su preferencia de mouse: Logitech, Pulsar, Razer");
console.log(mouse);

let procesador = prompt("Seleccione procesador deseado: Ryzen3, Ryzen4, Ryzen5");
console.log(procesador);

// Valores Monitor
let valorHP = 150000;
let valorLenovo = 17500;
let valorSamsung = 16000;

// Valor Teclados
let valorAntryx = 1300;
let valorHyperX = 1800;
let valorDucky = 2200;

// Valor Mouse
let valorLogitech = 32000;
let valorPulsar = 38000;
let valorRazer = 27000;

// Valor Procesador
let valorRyzen3 = 300000;
let valorRyzen4 = 375000;
let valorRyzen5 = 410000;

// Utilizo el switch para calcular el costo total de lo pedido por el usuario
let costototal = 0;

switch (monitor.toLowerCase()) {
  case "hp":
    costototal += valorHP;
    break;
  case "lenovo":
    costototal += valorLenovo;
    break;
  case "samsung":
    costototal += valorSamsung;
    break;
}

switch (teclado.toLowerCase()) {
  case "antryx":
    costototal += valorAntryx;
    break;
  case "hyperx":
    costototal += valorHyperX;
    break;
  case "ducky":
    costototal += valorDucky;
    break;
}

switch (mouse.toLowerCase()) {
  case "logitech":
    costototal += valorLogitech;
    break;
  case "pulsar":
    costototal += valorPulsar;
    break;
  case "razer":
    costototal += valorRazer;
    break;
}

switch (procesador.toLowerCase()) {
  case "ryzen3":
    costototal += valorRyzen3;
    break;
  case "ryzen4":
    costototal += valorRyzen4;
    break;
  case "ryzen5":
    costototal += valorRyzen5;
    break;
}

// Mostrar el costo total al usuario
alert(`El costo total de tu próxima computadora es de $${costototal} pesos`);

