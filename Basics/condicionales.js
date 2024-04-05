var numero = 5;

if (numero > 4) {
    console.log("si soy mayor que cuatro");
} else {
    console.log("Noup soy menor que cuatro");
}

var nombre1 = "Juan";
var nombre2 = "Andres";

if (nombre1 === "Juan") {
    console.log("Hola Juan");
} else if (nombre2 === "Andres") {
    console.log("Mm no eres Juan pero hola andres");
} else {
    console.log("No eres ni Andres ni Juan");
}


// if y else en una sola linea de codigo
const respuesta = nombre1 === "Juan" ? "Hola juan como andas" : "¿Quien sos?"