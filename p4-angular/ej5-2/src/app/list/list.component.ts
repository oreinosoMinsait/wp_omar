import { Component } from '@angular/core';

interface Juego {
  nombre: string;
  dificultad: string;
  nJugadores: number;
  clicked: boolean;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public juegos: Juego[] = [
    {
      nombre: 'Damas',
      dificultad: 'medio',
      nJugadores: 2,
      clicked: false,
    },
    {
      nombre: 'Azul',
      dificultad: 'facil',
      nJugadores: 2,
      clicked: false,
    },
    {
      nombre: 'Ajedrez',
      dificultad: 'dificil',
      nJugadores: 2,
      clicked: false,
    },
  ]

  public backgroundColors: string[] = ['#fbbb21', '#fbbb21', '#fbbb21'];
  public cantidadClicked = 0;

  // for (juego of this.juegos) {
  //   if (juego.clicked) {
  //     this.cantidadClicked += 1;
  //   }
  // }

  clicked(idx: number) {
    let nClicks = 0;

    if(this.juegos[idx].clicked) {
      this.juegos[idx].clicked = false;
      this.backgroundColors[idx] = '#fbbb21';
    } else {
      this.juegos[idx].clicked = true;
      this.backgroundColors[idx] = 'red';
    }

    for (const juego of this.juegos) {
      if (juego.clicked) {
        nClicks += 1;
      }
    }
    this.cantidadClicked = nClicks;
  }

}
