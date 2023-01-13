// console.log(process.argv);
var operaciones = ['+', '-', '*', '/'];
function procesarConsole(argConsola) {
    var cuenta = {
        operacion: '',
        numeros: [],
        error: false
    };
    for (var i = 0; i < argConsola.length; i++) {
        if (i == 0) {
            if (!(operaciones.includes(argConsola[i]))) {
                console.log('No has introducido una operación contemplada');
                cuenta.error = true;
                break;
            }
            else {
                cuenta.operacion = argConsola[i];
            }
        }
        else {
            var numCast = parseInt(argConsola[i], 10);
            if (isNaN(numCast)) {
                console.log('Has introducido valores no numéricos');
                cuenta.error = true;
                break;
            }
            else {
                cuenta.numeros.push(parseInt(argConsola[i], 10));
            }
        }
    }
    return cuenta;
}
var cuenta = procesarConsole(process.argv.slice(2));
// console.log(cuenta);
// Operaciones
function suma(operandos) {
    var res = operandos[0];
    for (var i = 1; i < operandos.length; i++) {
        res += operandos[i];
    }
    console.log(res);
}
function resta(operandos) {
    var res = operandos[0];
    for (var i = 1; i < operandos.length; i++) {
        res -= operandos[i];
    }
    console.log(res);
}
function multiplicacion(operandos) {
    var res = operandos[0];
    for (var i = 1; i < operandos.length; i++) {
        res *= operandos[i];
    }
    console.log(res);
}
function division(operandos) {
    var res = operandos[0];
    for (var i = 1; i < operandos.length; i++) {
        res /= operandos[i];
    }
    console.log(res);
}
if (!cuenta.error && cuenta.numeros.length > 1) {
    switch (cuenta.operacion) {
        case operaciones[0]:
            suma(cuenta.numeros);
            break;
        case operaciones[1]:
            resta(cuenta.numeros);
            break;
        case operaciones[2]:
            multiplicacion(cuenta.numeros);
            break;
        case operaciones[3]:
            division(cuenta.numeros);
            break;
    }
}
else {
    console.log('Hay que introducir al menos dos números');
}
