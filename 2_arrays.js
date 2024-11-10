// Arrays (arreglos) (como las list de python)
var miArreglo = ["John", 24];

console.log(miArreglo);

var estudiantes = ["Nora", "Gino", "Pedro"];
console.log(estudiantes);

// arryas Anidados, son como listas dentro de las listas 

var listaDeEstudiantes = [["Nora",97], ["JOSE", 99],["Pedro", "No Asistio"]];
console.log(listaDeEstudiantes);
console.log(listaDeEstudiantes[0]);

// Sustituir un valor
estudiantes[0] = "nuevo";
console.log(estudiantes);
// Consultar un elemento dentro de un Arrays que esta dentro de una arrays
console.log(listaDeEstudiantes[0][1]);

// Agregar algo dentro e un Arrays

var estaciones = ["Invierno","Otoño","Primavera"];

estaciones[3]= "verano";
console.log(estaciones);

estaciones.push("Verano2");

console.log(estaciones);

// Eliminar el ultimo elemento 

estaciones.pop();

console.log(estaciones);

var estacion = estaciones.pop();
console.log(estacion);

// Eliminar el primero 
estaciones.shift();  
console.log(estaciones);

// Agregar un elemento al inicio del array
estaciones.unshift("verano");

console.log(estaciones);

// 2H:14m
