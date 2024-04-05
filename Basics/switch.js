
function ejemploSwitch() {
    const nombre = "Juan";
    switch (nombre) {
        case "Juan":
            console.log("Hola Juan todo bien");
            break; // Se pone un break para que no haga mas validaciones
        case "Andres":
            console.log("Hola Andres la buena parce");
            break;
        default:
            console.log("No te conozco joto");
    }
}


// Piedra papel o tijera con switch case

let juego = function (userOption) {
    const opciones = ['Piedra', 'Papel', 'Tijera'];
    const cpuOption = opciones[Math.floor(Math.random() * 3)];

    switch (userOption) {
        case "Piedra":
            return cpuOption === "Piedra" ? "Empate!" : (cpuOption === "Tijera" ? "Ganaste!" : "Perdiste!");
        case "Papel":
            return cpuOption === "Papel" ? "Empate!" : (cpuOption === "Piedra" ? "Ganaste!" : "Perdiste");
        case "Tijera":
            return cpuOption === "Tijera" ? "Empate!" : (cpuOption === "Papel" ? "Ganaste!" : "Perdiste");
        default:
            return "Elige una opcion valida"
    }
}
if (require.main === module){
    console.log("Hola y bienvenido a mi primer piedra papel o tijera en js");
    console.log(juego('Piedra'));
}