var Cuenta = /** @class */ (function () {
    function Cuenta(titular, cantidad) {
        this.setTitular = titular;
        this.setCantidad = cantidad || 0;
    }
    Object.defineProperty(Cuenta.prototype, "getTitular", {
        get: function () {
            return this._titular;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cuenta.prototype, "setTitular", {
        set: function (value) {
            this._titular = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cuenta.prototype, "getCantidad", {
        // El atributo cantidad es opcional, pero no se puede hacer un método opcional
        // Por tanto, nos vemos obligados a devolver algo cuando se llama -> Pasamos 0 en caso de estar undefined
        get: function () {
            return this._cantidad || 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cuenta.prototype, "setCantidad", {
        set: function (value) {
            this._cantidad = value || 0;
        },
        enumerable: false,
        configurable: true
    });
    Cuenta.prototype.ingresar = function (cantidadI) {
        if (cantidadI < 0) {
            console.error('ERROR: La cantidad introducida es negativa');
            return;
        }
        this.setCantidad = this.getCantidad + cantidadI;
    };
    Cuenta.prototype.retirar = function (cantidadR) {
        var nuevaCantidad = this.getCantidad - cantidadR;
        this.setCantidad = nuevaCantidad < 0 ? 0 : nuevaCantidad;
    };
    Cuenta.prototype.mostrar = function () {
        console.log('Datos de la cuenta:');
        console.log("Titular: ".concat(this.getTitular));
        console.log("Cantidad: ".concat(this.getCantidad));
        console.log('--------------------------');
    };
    return Cuenta;
}());
// Crear objetos
var cuenta1 = new Cuenta('Pedro', 2000);
var cuenta2 = new Cuenta('Juan');
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
