var readlineSync = require('readline-sync');

let dinero = 1000;
let operacionARealizar;
let montoAOperar;
const listaUltimosMovimientos = [];

function menu(){
    console.log("Bienvenido a la caja. Indicanos qué operación deseas realizar: extraer, depositar, consultar saldo, ver últimos movimientos o salir");
    operacionARealizar = readlineSync.question("Qué operación deseas realizar? ");
    if (operacionARealizar === "extraer" || operacionARealizar === "depositar") {
        montoAOperar = readlineSync.question("Qué monto deseas operar? ");
        montoParseado = parseInt(montoAOperar);
        console.log("Vamos a hacer una " + operacionARealizar + " y vamos a operar con $ " + montoParseado);
    };
    switch (operacionARealizar) {
        case "extraer":
            extraer(montoAOperar)
            break;
        case "depositar":
            depositar(montoAOperar)
            break
        case "consultar saldo":
            consultaSaldo(dinero)
            break
        case "ultimos movimientos":
            ultimosMovimientos()
            break;
        case "salir":
            salir()
        default:
            console.log("No es una opcion válida");
            break;
    }
}

function extraer(montoAOperar){
    if (montoAOperar <= dinero) {
        dinero = dinero - montoAOperar;
        const mensaje = "Extraemos: " + montoAOperar + " y el saldo disponible luego de la extracción es de $" + dinero;
        const infoDelMovimiento = "Extraído: $ " + montoAOperar;
        listaUltimosMovimientos.push(infoDelMovimiento);
        console.log(mensaje)
        menu();
        return dinero;
    }
    else {
        console.log("No hay fondos");
        menu();
    }
}

function depositar(montoAOperar){
    dinero = dinero + parseInt(montoAOperar);
    console.log("Tu saldo disponible ahora es de: " + dinero);
    const mensaje = "Depositamos: $" + montoAOperar + " y el saldo disponible luego del depósito es de $" + dinero;
    const infoDelMovimiento = "Depositado: $" + montoAOperar;
    listaUltimosMovimientos.push(infoDelMovimiento);
    console.log(mensaje);
    menu();
    return dinero;
}

function consultaSaldo(){
    console.log("Tu saldo disponible es de: ", + dinero);
    const infoDelMovimiento = "Consultado saldo: $" + dinero;
    listaUltimosMovimientos.push(infoDelMovimiento);
    menu();
    return dinero;
}

function ultimosMovimientos(){
    if (listaUltimosMovimientos.length == 0) {
        console.log("Aun no hay movimientos realizados en esta caja")
    } else {
        for(let i = 0; i <= listaUltimosMovimientos.length; i++) {
            console.log(listaUltimosMovimientos[i]);
        }
    }
    menu();
}

function salir(){
    console.log("salimos");
    return;
}

function main(){
    menu();
}

main();