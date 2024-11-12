// if(){}
var x = 1;

if(true){
    console.log("La condicion es verdadera");
}

if(x>2){
    console.log("No deberia cumplirse");
}

if(x<2){
    console.log("Si deberia cumplirse");
}

// else
var estacion = "Invierno";
var grados   = 0; 
if((estacion=="Invierno")&&(grados<=11)){
   console.log("Es invierno");
}

if((estacion=="Invierno")&&(grados>=11)){
    console.log("No debe cumplirse");
 } else{
    console.log("Aun no es inverno");
}

// else if



console.log("else if");

function clasificar(valor){
    if (valor % 2 == 0){
        console.log("Es par");
        } else if (valor % 3 == 0){
        console.log("Es divisible entre 3 ")
        } else{
        console.log("No es divisible entre 2 ni 3");
         }
}

clasificar(10);
clasificar(9);
clasificar(11);


