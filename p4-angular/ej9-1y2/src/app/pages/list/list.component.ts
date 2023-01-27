import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CompleteAnimalI, AnimalI } from 'src/app/models/animals.interface';
import { RequestAnimalsService } from 'src/app/services/request-animals.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public animals: AnimalI[] = [];

  constructor(
    private requestAnimalsS: RequestAnimalsService,
    private router: Router
    ) {}

  ngOnInit() {
    this.requestAnimalsS.getAllAnimals().subscribe(
      (data: CompleteAnimalI[]): void => {
        for(let i=0; i<data.length; i++) {
          this.animals.push({
            id: data[i].id,
            name_EUes: data[i]['name']['name-EUes'],
            catch_phrase: data[i]['catch-phrase'],
            rarity: data[i]['availability'].rarity,
            price: data[i].price,
            image_uri: data[i].image_uri,
          })
        }
        console.log(data);
        console.log(this.animals);
      }
    );
  }

  selectAnimal(id: number): void {
    this.requestAnimalsS.getSpecificAnimal(id).subscribe()
    this.router.navigate(['/animal-detail', id]);
    console.log(id);
  }
}
