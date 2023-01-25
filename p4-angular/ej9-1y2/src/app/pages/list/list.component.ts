import { Component } from '@angular/core';
import { animalI } from 'src/app/models/animals.interface';
import { RequestAnimalsService } from 'src/app/services/request-animals.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public animals: animalI[] = [];
  public whatever: any;

  constructor(private requestAnimalsS: RequestAnimalsService) {}

  ngOnInit() {
    this.whatever = this.requestAnimalsS.getAllAnimals().subscribe();
    console.log(this.whatever);
  }
}
