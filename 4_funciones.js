function mostrarmensaje() {
console.log("Hola, Mundo!");
}

mostrarmensaje();

function sumar(a,b){
    var suma=a+b;
    console.log("El resultado de la suma de " + a+ " + " + b + " es " +suma);
}

sumar(5,8);

// Contenedor de cadenas

function contenedorTresCadenas(cadena1, cadena2, cadena3){
    console.log(cadena1+" "+cadena2 + " " + cadena3);
}

contenedorTresCadenas("Estoy","Aprendiendo","a programar");

//ambito local
/* Si declaras una variable dentro de una funcion solo sera local dentro de la funcion */


// return

function sumar2(a,b){
    return a+b;
}
console.log(sumar2(2,3));

//asignar un valor retornado 
console.log("asignando el valor de sumar2 con 3 y 6");
var resultado = sumar2(3,6);
console.log(resultado);

