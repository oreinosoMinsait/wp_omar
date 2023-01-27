import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  private animalId?: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) {
    // Obtener URL (no se usa a nivel funcional)
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
    )
    .subscribe(
      (route) => {
        console.log((route as NavigationEnd).url);
      }
    );
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // ! is required because "?" protects from "undefined" but get() could return "null"
      // this unsures the compiler that always will be some data there
      this.animalId = params.get('id')!;
      console.log('This is the animalId', this.animalId);
    });

    // Ahora poner aquí la consulta a la API con el id específico pasado por parámetro
    // El método ya está hecho. Hay que recuperar la info y pintarla
  }
}
