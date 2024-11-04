console.log("hola")
//comentario 

/*
comentario 
de varias 
lineas
*/

var miVarable = "freeCodeCamp";
console.log(miVarable)

// Operaciones

var suma = 7+12;
var resultadoNegtivo = 12 - 13 ;
var resultadoFinal;
var pruebadivisionIntYFloat = 5.2/2,

resultadoFinal = resultadoNegtivo + suma;
console.log(suma);
console.log(resultadoNegtivo);
console.log(resultadoFinal);
console.log(pruebadivisionIntYFloat);

// incremento 
console.log("incremnto");
var libros = 0;
var libros2 = 0;

libros = libros + 2;
console.log("resultado de libros = " + libros );
libros2 ++;   // se incrmente de 1 en 1 
// otra formade implimir con variables
console.log (`resultado de libros2 = ${libros2}`);
libros2 = libros + 1;
console.log("libros2 resultado 2 = " + libros2 );

// Decrementar

var decrementar_1 = 8;
decrementar_1 = decrementar_1 - 1; 
console.log("Decrementar =" + decrementar_1);
decrementar_1 --;
console.log("Decrementar con -- seria = " + decrementar_1);
decrementar_1 -= 5;
console.log("seria con variable-=5 entonces nos queda = " + decrementar_1);

//imprimir comillas

console.log("imprimir comillas \"hola\" ");
console.log("Esta es otra manera 'hola'" + ' Esta es otra manera " hola " ');

// smando variables con texto 

var mensaje     = "Estoy aprendiendo " ;
var parteFinal  = "a programar ";
var lenguaje    = "en javaScript "; 
console.log(mensaje);
mensaje +=parteFinal;
console.log(mensaje);
mensaje = mensaje + lenguaje;
console.log(mensaje);

// longitud de una cadena de caracteres 

console.log("ver cuantos caracteres tiene una cadena " + mensaje.length);

console.log(mensaje[0]+ " "+mensaje[1]);

var miCadena = "hola";
//para saber el ultimo elmento 

console.log(miCadena[miCadena.length - 1]);

console.log(miCadena[miCadena.length - 2]);

