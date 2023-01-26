import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { animalI } from 'src/app/models/animals.interface';
import { RequestAnimalsService } from 'src/app/services/request-animals.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public animals: animalI[] = [];

  constructor(private requestAnimalsS: RequestAnimalsService) {}

  ngOnInit() {
    this.animals = this.requestAnimalsS.getAllAnimals().subscribe(
      (data: animalI[]) => {
        console.log(data);
      }
    );
  }
}
