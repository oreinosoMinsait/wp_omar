// Tipos de datos
var EstadoCivil;
(function (EstadoCivil) {
    EstadoCivil["SOLTERO"] = "soltero";
    EstadoCivil["CASADO"] = "casado";
})(EstadoCivil || (EstadoCivil = {}));
var TipoCasa;
(function (TipoCasa) {
    TipoCasa["CHALET"] = "chalet";
    TipoCasa["PISO"] = "piso";
    TipoCasa["DUPLEX"] = "duplex";
})(TipoCasa || (TipoCasa = {}));
// Clases
var Casa = /** @class */ (function () {
    function Casa(superficie, precio, numeroHabitaciones, numeroBaños, tipoCasa, venta, props) {
        this.superficie = superficie;
        this.precio = precio;
        this.numeroHabitaciones = numeroHabitaciones;
        this.numeroBaños = numeroBaños;
        this.tipoCasa = tipoCasa;
        this.venta = venta;
        this.props = props;
        this.enVenta = venta || true; // Valor por defecto
        this.propietarios = props || [];
    }
    Casa.prototype.comprar = function (compradores) {
        var dineroTotal = 0;
        compradores.forEach(function (comprador) {
            dineroTotal += comprador.dinero;
        });
        if (dineroTotal >= this.precio) {
            this.enVenta = false;
            this.propietarios = compradores;
            // No se especifica que haya que restar el dinero a los propietarios
            // Se supone que piden hipoteca
        }
        else {
            console.log('ERROR: Los compradores no tienen suficiente dinero para adquirir esta casa.');
        }
    };
    return Casa;
}());
var Persona = /** @class */ (function () {
    function Persona(nombre, edad, dinero, dni, estadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.dinero = dinero;
        this.dni = dni;
        this.estadoCivil = estadoCivil;
    }
    Persona.prototype.casarse = function (pareja) {
        if (this.estadoCivil == EstadoCivil.SOLTERO &&
            pareja.estadoCivil == EstadoCivil.SOLTERO) {
            this.estadoCivil = EstadoCivil.CASADO;
            pareja.estadoCivil = EstadoCivil.CASADO;
        }
        else {
            console.log('ERROR: Hay alguien casado/a');
        }
    };
    return Persona;
}());
// Objetos y ejemplos
var juan = new Persona('Juan', 32, 50000, '54672398L', EstadoCivil.SOLTERO);
var maria = new Persona('María', 34, 125000, '34568910T', EstadoCivil.SOLTERO);
var paula = new Persona('Paula', 27, 195000, '34589921D', EstadoCivil.SOLTERO);
var chalet1 = new Casa(152, 160000, 3, 2, TipoCasa.CHALET);
var piso1 = new Casa(68, 60000, 2, 1, TipoCasa.PISO);
maria.casarse(juan); // Debería funcionar correctamente.
maria.casarse(paula); // Debería imprimir en consola el error "ERROR: La persona ya está casada".
chalet1.comprar([juan, maria]); // Debería comprar el chalet correctamente al tener entre los dos suficiente dinero
piso1.comprar([juan]); // ERROR: Los compradores no tienen suficiente dinero para adquirir esta casa.
console.log(juan.estadoCivil); // casado
console.log(paula.estadoCivil); // soltero
console.log(chalet1.enVenta); // false
console.log(piso1.enVenta); //true
