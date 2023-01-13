// console.log(process.argv);

let operaciones = ['+', '-', '*', '/']

interface ICuenta {
  operacion: string;
  numeros: number[];
  error: boolean;
}

function procesarConsole(argConsola: string[]): ICuenta {  

  let cuenta: ICuenta = {
    operacion: '',
    numeros: [], // Se inicializa vacío
    error: false,
  };

  for (let i = 0; i < argConsola.length; i++) {

    if (i == 0) {
      if (!(operaciones.includes(argConsola[i]))) {
        console.log('No has introducido una operación contemplada');
        cuenta.error = true;
        break;
      } else {
        cuenta.operacion = argConsola[i];
      }
    } else {
        let numCast = parseInt(argConsola[i], 10);
        if (isNaN(numCast)) {
          console.log('Has introducido valores no numéricos');
          cuenta.error = true;
          break;
        } else {
          cuenta.numeros.push(parseInt(argConsola[i], 10));
        }
    }
  }

  return cuenta;
}

let cuenta: ICuenta = procesarConsole(process.argv.slice(2));
// console.log(cuenta);


// Operaciones

function suma(operandos: number[]): void {

  let res: number = operandos[0];

  for(let i = 1; i < operandos.length ; i++) {
    res += operandos[i];
  }

  console.log(res);
}

function resta(operandos: number[]):void {

  let res: number = operandos[0];

  for(let i = 1; i < operandos.length ; i++) {
    res -= operandos[i];
  }

  console.log(res);
}

function multiplicacion(operandos: number[]): void {

  let res: number = operandos[0];

  for(let i = 1; i < operandos.length ; i++) {
    res *= operandos[i];
  }

  console.log(res);
}

function division(operandos: number[]):void {

  let res: number = operandos[0];


  for(let i = 1; i < operandos.length ; i++) {
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
} else {
  console.log('Hay que introducir al menos dos números');
}