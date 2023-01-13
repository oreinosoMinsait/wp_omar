// Tipos de datos
enum EstadoCivil {
  SOLTERO = 'soltero',
  CASADO = 'casado'
}

enum TipoCasa {
  CHALET = 'chalet',
  PISO = 'piso',
  DUPLEX = 'duplex'
}

interface PersonaI {
  nombre: string;
  edad: number;
  dinero: number;
  dni: string;
  estadoCivil: EstadoCivil;
}

interface CasaI {
  superficie: number;
  precio: number;
  numeroHabitaciones: number;
  numeroBaños: number;
  tipoCasa: TipoCasa;
  enVenta: boolean;
  propietarios: Persona[];
}


// Clases
class Casa implements CasaI {
  public enVenta: boolean;
  public propietarios: Persona[];

  constructor(
    public superficie: number,
    public precio: number,
    public numeroHabitaciones: number,
    public numeroBaños: number,
    public tipoCasa: TipoCasa,
    public venta?: boolean,
    public props?: Persona[]
  ) {
    this.enVenta = venta || true; // Valor por defecto
    this.propietarios = props || [];
  }

  public comprar(compradores: Persona[]) {
    let dineroTotal: number = 0;

    compradores.forEach(comprador => {
      dineroTotal += comprador.dinero;
    });

    if (dineroTotal >= this.precio) {
      this.enVenta = false;
      this.propietarios = compradores;
      // No se especifica que haya que restar el dinero a los propietarios
      // Se supone que piden hipoteca
    } else {
      console.log('ERROR: Los compradores no tienen suficiente dinero para adquirir esta casa.');
    }

  }
}

class Persona implements PersonaI {
  constructor(
    public nombre: string,
    public edad: number,
    public dinero: number,
    public dni: string,
    public estadoCivil: EstadoCivil
  ) { }

  public casarse(pareja: Persona) {
    if (this.estadoCivil == EstadoCivil.SOLTERO &&
      pareja.estadoCivil == EstadoCivil.SOLTERO
      ){
      this.estadoCivil = EstadoCivil.CASADO;
      pareja.estadoCivil = EstadoCivil.CASADO;
    } else {
      console.log('ERROR: Hay alguien casado/a');
    }
  }

}

// Objetos y ejemplos
const juan: Persona = new Persona('Juan', 32, 50000, '54672398L', EstadoCivil.SOLTERO);
const maria: Persona = new Persona('María', 34, 125000, '34568910T', EstadoCivil.SOLTERO);
const paula: Persona = new Persona('Paula', 27, 195000, '34589921D', EstadoCivil.SOLTERO);
const chalet1: Casa = new Casa(152, 160000, 3, 2, TipoCasa.CHALET);
const piso1: Casa = new Casa(68, 60000, 2, 1, TipoCasa.PISO);

maria.casarse(juan); // Debería funcionar correctamente.
maria.casarse(paula); // Debería imprimir en consola el error "ERROR: La persona ya está casada".
chalet1.comprar([juan, maria]); // Debería comprar el chalet correctamente al tener entre los dos suficiente dinero
piso1.comprar([juan]); // ERROR: Los compradores no tienen suficiente dinero para adquirir esta casa.

console.log(juan.estadoCivil); // casado
console.log(paula.estadoCivil); // soltero
console.log(chalet1.enVenta); // false
console.log(piso1.enVenta); //true