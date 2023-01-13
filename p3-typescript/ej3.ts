enum Color {
  Azul = 'azul',
  Rojo = 'rojo',
  Dorado = 'dorado',
  Plateado = 'plateado',
  Blanco = 'blanco',
  Negro = 'negro',
};

type ConsumoEnergetico = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';


class Electrodomestico {

  private _consumoEnergetico: ConsumoEnergetico;

  // Los parámetros por defecto hay que colocarlos al final
  constructor (
    protected _marca: string, // Protected para enseñarla desde el método mostrar() de la clase hija
    private _modelo: string,
    private _precio: number,
    private _color: Color,
    private _peso: number,
    private _material: string,
    consumoEnergetico ?: ConsumoEnergetico // Se pasa como parámetro opcional
    ) {
    this._consumoEnergetico = consumoEnergetico || 'F'; // Establecer el valor por defecto
  }

  public mostrar() {
    console.log(
      this._marca             + '\n' +
      this._modelo            + '\n' +
      this._precio            + '\n' +
      this._color             + '\n' +
      this._consumoEnergetico + '\n' +
      this._peso              + '\n' +
      this._material          + '\n' +
      '-----------------'
    );
  }

  public set cambiarColor(nuevoColor: Color) {
    this._color = nuevoColor;
  }

  public mejorarConsumoEnergetico(nuevoConsumoEnergetico: ConsumoEnergetico) {
    this._consumoEnergetico = nuevoConsumoEnergetico;
  }
}


class Televisor extends Electrodomestico {

  constructor(
    marca: string,
    modelo: string,
    precio: number,
    color: Color,
    peso: number,
    material: string,
    private _numeroDePulgadas: number,
    private _tipoDeTecnologia: string,
    private _numeroDeCanales: number,
    consumoEnergetico ?: ConsumoEnergetico
  ) {
    super(
      marca,
      modelo,
      precio,
      color,
      peso,
      material,
      consumoEnergetico
    )
  }

  public anadirCanales(cantidad: number) {
    this._numeroDeCanales += cantidad;
  }

  public borrarCanales(cantidad: number) {
    this._numeroDeCanales -= cantidad;
    this._numeroDeCanales < 0 ? 0 : this._numeroDeCanales;
  }

  public mostrar() {
    console.log(
      this._marca            + '\n' +
      this._numeroDePulgadas + '\n' +
      this._tipoDeTecnologia + '\n' +
      this._numeroDeCanales  + '\n' +
      '-----------------'
    );
  }
}


class Lavadora extends Electrodomestico {

  constructor(
    marca: string,
    modelo: string,
    precio: number,
    color: Color,
    peso: number,
    material: string,
    private _tiposDeLavado: string[],
    consumoEnergetico ?: ConsumoEnergetico
  ) {
    super(
      marca,
      modelo,
      precio,
      color,
      peso,
      material,
      consumoEnergetico
    )
  }

  public mostrar() {
    console.log(this._marca);
    console.log('Lavados:');
    for(let i: number = 0; i < this._tiposDeLavado.length; i++) {
      console.log('  -' + this._tiposDeLavado[i]);
    }
    console.log('-----------------');
  }

  public anadirTipoLavado(nuevoLavado: string) {
    this._tiposDeLavado.push(nuevoLavado);
  }

  public borrarTipoDeLavado(lavado: string) {
    let indexLavado: number = this._tiposDeLavado.indexOf(lavado);
    this._tiposDeLavado.splice(indexLavado, 1);
  }
}


// Creación de objetos y ejemplos
let miElectrodomestico = new Electrodomestico('samsung', 'frigorifico', 800, Color.Rojo, 100, 'aluminio');
miElectrodomestico.mostrar();
miElectrodomestico.cambiarColor = Color.Plateado; // Setter
miElectrodomestico.mostrar();
miElectrodomestico.mejorarConsumoEnergetico('B');
miElectrodomestico.mostrar();

let miTelevisor = new Televisor('xiaomi', 'television', 500, Color.Negro, 30, 'plástico', 65, 'QLED', 30);
miTelevisor.mostrar();
miTelevisor.anadirCanales(7);
miTelevisor.mostrar();
miTelevisor.borrarCanales(2);
miTelevisor.mostrar();

let miLavadora = new Lavadora('philips', 'lavadora', 400, Color.Blanco, 200, 'metal', ['ropa delicada', 'mixto']);
miLavadora.mostrar();
miLavadora.anadirTipoLavado('sintéticos');
miLavadora.mostrar();
miLavadora.borrarTipoDeLavado('mixto');
miLavadora.mostrar();