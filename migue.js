// argumento1 para ingresar: extraer, depositar, ultimos movimientos, saldo,salir
const argumento1 = process.argv[2];
// argumento2 para ingresar monto de deposito o extraccion
const argumento2 = process.argv[3];
let opcion = argumento1;
let dinero = parseFloat(argumento2);

let dineroEnCuenta = 1000;
let movimientos = [];

function depositar(dinero) {
    if (!isNaN(dinero) && dinero > 0) {
        dineroEnCuenta += dinero;
        console.log("Has depositado: $" + dinero + ". Nuevo saldo: $" + dineroEnCuenta);
        movimientos.push("deposito: $"+ dinero)
    } else {
        console.log("Ingresa un monto válido.");
    }
    
} 

function extraer(dinero) {
        if (!isNaN(dinero) && dinero > 0 && dinero <= dineroEnCuenta) {
            dineroEnCuenta -= dinero;
            console.log("Has extraído: $" + dinero + ". Nuevo saldo: $" + dineroEnCuenta);
            movimientos.push("extracción: $"+ dinero)
        } else if (dinero > dineroEnCuenta) {
            console.log("Fondos insuficientes.");
        } else {
            console.log("Ingresa un monto válido.");
        }
}

function saldo(){
    console.log("Tu saldo actual es de: $"+ dineroEnCuenta);
    movimientos.push("Consulta de saldo: $"+dineroEnCuenta)
}

function ultimosMovimientos(){
    console.log("Ultimos Movimientos");
    console.log(movimientos)
}

function salir(){
    console.log("Salimos del programa");
    return;
}

function main() {
    console.log("Bienvenido al ATM II - Para realizar una acción indique:")
    switch (opcion) {
        case "depositar":
            depositar(dinero);
            break;
        case "extraer":
            extraer(dinero);
            break;
        case "saldo":
            saldo();
            break;
        case "movimientos":
            ultimosMovimientos();
            break;
        case "salir":
            salir();
            break;
        default:
            console.log("No es una opcion válida");
        }
}

main();