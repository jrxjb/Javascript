//cumplen la misma funcion 

function esMenorQue(a,b){
return a<b   
}

function esMenorQue_2(a,b){
    if (a<b){
        return true;
    } else{ return false; } 
    }

var a=1;
var b=2;

console.log(esMenorQue(a,b));
console.log(esMenorQue_2(a,b));

console.log("No se cumple la función");
var a=2;
var b=1;

console.log(esMenorQue(a,b));
console.log(esMenorQue_2(a,b));


