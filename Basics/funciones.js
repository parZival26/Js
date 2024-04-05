//Funciones declarativas

function miFuncion() {
    return 3;
}

function sumar(a, b) {
    const RESULTADO = a + b
    return RESULTADO
}

miFuncion();

//Funciones de Expresion

var miFuncion = function (a, b) {
    return a + b;
}

miFuncion();


// Fstring
nombre = "Juan"
saludo = `Hola ${nombre} es un gusto poder saludarte    `