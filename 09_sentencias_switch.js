
// SWITCH
var valor;
function clasificarValor(valor){
switch(valor){
    case 1:    respuesta = "alpha";         break;  
    case 2:    respuesta = "beta";          break;
    case 3:    respuesta = "gamma";         break;
    case "no": respuesta = "salir";         break;
    default:   respuesta = "No reconocido"; break
}
return respuesta
}

console.log(clasificarValor(1));
console.log(clasificarValor("no"));
console.log(clasificarValor("x"));

// Para varios casos 
console.log("Varios casos una misma sentencia")
function clasificarValor(valor){
    switch(valor){
        case 1:    respuesta = "alpha";         break;  
        case 2:
        case 3:    
        respuesta = "gamma";                    break;    // si es 2 o 3 la respuesta sera la misma, pueden ser vario no solo 2 casos
        case "no": respuesta = "salir";         break;
        default:   respuesta = "No reconocido"; break
    }
    return respuesta
    }
    
    console.log(clasificarValor(1));
    console.log(clasificarValor(2));
    console.log(clasificarValor(3));
    

