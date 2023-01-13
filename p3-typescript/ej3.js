var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Color;
(function (Color) {
    Color["Azul"] = "azul";
    Color["Rojo"] = "rojo";
    Color["Dorado"] = "dorado";
    Color["Plateado"] = "plateado";
    Color["Blanco"] = "blanco";
    Color["Negro"] = "negro";
})(Color || (Color = {}));
;
var Electrodomestico = /** @class */ (function () {
    // Los parámetros por defecto hay que colocarlos al final
    function Electrodomestico(_marca, // Protected para enseñarla desde el método mostrar() de la clase hija
    _modelo, _precio, _color, _peso, _material, consumoEnergetico // Se pasa como parámetro opcional
    ) {
        this._marca = _marca;
        this._modelo = _modelo;
        this._precio = _precio;
        this._color = _color;
        this._peso = _peso;
        this._material = _material;
        this._consumoEnergetico = consumoEnergetico || 'F'; // Establecer el valor por defecto
    }
    Electrodomestico.prototype.mostrar = function () {
        console.log(this._marca + '\n' +
            this._modelo + '\n' +
            this._precio + '\n' +
            this._color + '\n' +
            this._consumoEnergetico + '\n' +
            this._peso + '\n' +
            this._material + '\n' +
            '-----------------');
    };
    Object.defineProperty(Electrodomestico.prototype, "cambiarColor", {
        set: function (nuevoColor) {
            this._color = nuevoColor;
        },
        enumerable: false,
        configurable: true
    });
    Electrodomestico.prototype.mejorarConsumoEnergetico = function (nuevoConsumoEnergetico) {
        this._consumoEnergetico = nuevoConsumoEnergetico;
    };
    return Electrodomestico;
}());
var Televisor = /** @class */ (function (_super) {
    __extends(Televisor, _super);
    function Televisor(marca, modelo, precio, color, peso, material, _numeroDePulgadas, _tipoDeTecnologia, _numeroDeCanales, consumoEnergetico) {
        var _this = _super.call(this, marca, modelo, precio, color, peso, material, consumoEnergetico) || this;
        _this._numeroDePulgadas = _numeroDePulgadas;
        _this._tipoDeTecnologia = _tipoDeTecnologia;
        _this._numeroDeCanales = _numeroDeCanales;
        return _this;
    }
    Televisor.prototype.anadirCanales = function (cantidad) {
        this._numeroDeCanales += cantidad;
    };
    Televisor.prototype.borrarCanales = function (cantidad) {
        this._numeroDeCanales -= cantidad;
        this._numeroDeCanales < 0 ? 0 : this._numeroDeCanales;
    };
    Televisor.prototype.mostrar = function () {
        console.log(this._marca + '\n' +
            this._numeroDePulgadas + '\n' +
            this._tipoDeTecnologia + '\n' +
            this._numeroDeCanales + '\n' +
            '-----------------');
    };
    return Televisor;
}(Electrodomestico));
var Lavadora = /** @class */ (function (_super) {
    __extends(Lavadora, _super);
    function Lavadora(marca, modelo, precio, color, peso, material, _tiposDeLavado, consumoEnergetico) {
        var _this = _super.call(this, marca, modelo, precio, color, peso, material, consumoEnergetico) || this;
        _this._tiposDeLavado = _tiposDeLavado;
        return _this;
    }
    Lavadora.prototype.mostrar = function () {
        console.log(this._marca);
        console.log('Lavados:');
        for (var i = 0; i < this._tiposDeLavado.length; i++) {
            console.log('  -' + this._tiposDeLavado[i]);
        }
        console.log('-----------------');
    };
    Lavadora.prototype.anadirTipoLavado = function (nuevoLavado) {
        this._tiposDeLavado.push(nuevoLavado);
    };
    Lavadora.prototype.borrarTipoDeLavado = function (lavado) {
        var indexLavado = this._tiposDeLavado.indexOf(lavado);
        this._tiposDeLavado.splice(indexLavado, 1);
    };
    return Lavadora;
}(Electrodomestico));
// Creación de objetos y ejemplos
var miElectrodomestico = new Electrodomestico('samsung', 'frigorifico', 800, Color.Rojo, 100, 'aluminio');
miElectrodomestico.mostrar();
miElectrodomestico.cambiarColor = Color.Plateado; // Setter
miElectrodomestico.mostrar();
miElectrodomestico.mejorarConsumoEnergetico('B');
miElectrodomestico.mostrar();
var miTelevisor = new Televisor('xiaomi', 'television', 500, Color.Negro, 30, 'plástico', 65, 'QLED', 30);
miTelevisor.mostrar();
miTelevisor.anadirCanales(7);
miTelevisor.mostrar();
miTelevisor.borrarCanales(2);
miTelevisor.mostrar();
var miLavadora = new Lavadora('philips', 'lavadora', 400, Color.Blanco, 200, 'metal', ['ropa delicada', 'mixto']);
miLavadora.mostrar();
miLavadora.anadirTipoLavado('sintéticos');
miLavadora.mostrar();
miLavadora.borrarTipoDeLavado('mixto');
miLavadora.mostrar();
