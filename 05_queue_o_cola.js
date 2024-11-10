//Permanece en fila (una cola o queue)

function proxmoEnFila(arr,elem){
    arr.push(elem);     //Agregar elem
    return arr.shift(); // Quitar el primero
}

var miArrglo = [ 1,2,3,4,5];

console.log("antes: "+ JSON.stringify(miArrglo));   // JSON.stringify es para que se muestre mejor 

console.log(proxmoEnFila(miArrglo,6));

console.log("Despues: " + miArrglo);

