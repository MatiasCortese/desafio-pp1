var readlineSync = require('readline-sync');
// TO-DO
// Considerar modulo para parsear el input
// valor inicial de la caja
let dinero = 1000;
const listaUltimosMovimientos = [];
// Obtener movimiento
// let movimiento = process.argv[2];
// // Obtener valor parsear con parseInt();
// let valorDinero2 = process.argv[3];
// console.log("datos de la operacion", + " ", valorDinero2)
// Parsear el numero que ingresa x consola toInt()
// hacer un switch con cada caso

function menu(){
    console.log("Bienvenido a la caja. Indicanos qué operación deseas realizar: extraer, depositar, consultar saldo, ver últimos movimientos o salir");
    const operacionARealizar = readlineSync.question("Qué operación deseas realizar? ");
    const montoAOperar = readlineSync.question("Qué monto deseas operar?");
    const montoParseado = parseInt(montoAOperar);
    console.log("Vamos a hacer una " + operacionARealizar + " y vamos a operar con $ " + montoParseado);
}

function extraer(montoAOperar){
    if (montoAOperar <= dinero) {
        dinero = dinero - montoAOperar;
        const mensaje = "Extraemos: " + montoAOperar + " y el saldo disponible luego de la extracción es de $" + dinero;
        const infoDelMovimiento = "Extraído: $ " + montoAOperar;
        listaUltimosMovimientos.push(infoDelMovimiento);
        console.log(mensaje)
        return dinero;
    }
    else {
        console.log("No hay fondos");
    }
}

function depositar(montoAOperar){
    dinero = dinero + montoAOperar;
    console.log("Tu saldo disponible ahora es de: " + dinero);
    const mensaje = "Depositamos: $" + montoAOperar + " y el saldo disponible luego del depósito es de $" + dinero;
    const infoDelMovimiento = "Depositado: $" + montoAOperar;
    listaUltimosMovimientos.push(infoDelMovimiento);
    console.log(mensaje);
    return dinero;
}

function consultaSaldo(){
    console.log("Tu saldo disponible es de: ", + dinero);
    const infoDelMovimiento = "Consultado saldo: $" + dinero;
    listaUltimosMovimientos.push(infoDelMovimiento);
    return dinero;
}

function ultimosMovimientos(){
    for(let i = 0; i <= listaUltimosMovimientos.length; i++) {
        console.log(listaUltimosMovimientos[i]);
    }
}

function salir(){

}

function main(){
    extraer(200);
    depositar(300);
    consultaSaldo();
    ultimosMovimientos();
}

main();