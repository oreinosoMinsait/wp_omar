/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent {

  public contador: number = 0;
  public error: string = '';
  public valorIncremento: number = 1;

  decrementar(): void {

    if (this.contador >= this.valorIncremento) {
      this.contador -= this.valorIncremento;
    } else {
      this.error = 'No se puede decrementar por debajo de 0';
    }
  }

  incrementar(): void {
    this.contador += this.valorIncremento;
    if(this.error != '') {
      this.error = '';
    }
  }

  obtenerValor(value: string) {
    this.valorIncremento = parseInt(value, 10);
  }
}
