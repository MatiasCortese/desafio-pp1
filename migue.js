let dineroEnCuenta = 1000;
let movimientos = [];

function depositoExtraccion(opcion, dinero) {
    if (opcion === "depositar") {
        if (!isNaN(dinero) && dinero > 0) {
            dineroEnCuenta += dinero;
            console.log("Has depositado: " + dinero + ". Nuevo saldo: " + dineroEnCuenta);
        } else {
            console.log("Ingresa un monto válido.");
        }
    } else if (opcion === "extraer") {
        if (!isNaN(dinero) && dinero > 0 && dinero <= dineroEnCuenta) {
            dineroEnCuenta -= dinero;
            console.log("Has extraído: " + dinero + ". Nuevo saldo: " + dineroEnCuenta);
        } else if (dinero > dineroEnCuenta) {
            console.log("Fondos insuficientes.");
        } else {
            console.log("Ingresa un monto válido.");
        }
    } else {
        console.log("Opción no válida. Debe ser 'depositar' o 'extraer'.");
    }
}

function main() {
    const argumento1 = process.argv[2];
    const argumento2 = process.argv[3];
    let opcion = argumento1;
    let dinero = parseFloat(argumento2);

    depositoExtraccion(opcion, dinero);
}

main();