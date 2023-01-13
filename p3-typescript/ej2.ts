class Cuenta  {
  public get getTitular() {
      return this._titular;
  }

  public set setTitular(value: string) {
      this._titular = value;
  }

  // El atributo cantidad es opcional, pero no se puede hacer un método opcional
  // Por tanto, nos vemos obligados a devolver algo cuando se llama -> Pasamos 0 en caso de estar undefined
  public get getCantidad(): number {
      return this._cantidad || 0;
  }

  public set setCantidad(value: number) {
      this._cantidad = value || 0;
  }

  private _titular: string;
  private _cantidad?: number;
  
  constructor(titular: string, cantidad?: number) {
      this.setTitular = titular;
      this.setCantidad = cantidad || 0;
  }

  public ingresar(cantidadI: number) {
      if (cantidadI < 0) {
          console.error('ERROR: La cantidad introducida es negativa');
          return;
      }
      this.setCantidad = this.getCantidad + cantidadI;
  }

  public retirar(cantidadR: number) {
      const nuevaCantidad = this.getCantidad - cantidadR;
      this.setCantidad = nuevaCantidad < 0 ? 0 : nuevaCantidad;
  }

  public mostrar() {
      console.log('Datos de la cuenta:');
      console.log(`Titular: ${this.getTitular}`);
      console.log(`Cantidad: ${this.getCantidad}`);
      console.log('--------------------------');
  }
}


// Crear objetos
const cuenta1 = new Cuenta('Pedro', 2000);
const cuenta2 = new Cuenta('Juan');

// Las cuentas se inician con los valores del constructor
cuenta1.mostrar();
cuenta2.mostrar();

// Ingresamos 300€ a la cuenta 1
cuenta1.ingresar(300);
cuenta1.mostrar();

// Ingresamos un número negativo a la cuenta 2 haciendo que salte un error por consola
cuenta2.ingresar(-200);
cuenta2.mostrar();

// Retiramos 500€ de la cuenta 1 y la vemos tras la operación
cuenta1.retirar(500);
cuenta1.mostrar();

// Retiramos una cantidad mayor a la que hay en la cuenta por lo que se queda a 0.
cuenta1.retirar(4000);
cuenta1.mostrar();