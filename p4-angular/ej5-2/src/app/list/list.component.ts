import { Component } from '@angular/core';

interface Juego {
  nombre: string;
  dificultad: string;
  nJugadores: number;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public juegos: Juego[] = [
    {
      nombre: 'Gloomhaven',
      dificultad: 'dificil',
      nJugadores: 3,
    },
    {
      nombre: 'Azul',
      dificultad: 'facil',
      nJugadores: 2,
    },
    {
      nombre: 'Ajedrez',
      dificultad: 'dificil',
      nJugadores: 2,
    },
  ]

}
