import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompleteAnimalI, AnimalI } from '../models/animals.interface';
import { Observable } from 'rxjs';

const baseUrl = 'https://acnhapi.com/v1a/';
const animalsUrl = baseUrl + 'fish/';

@Injectable()
export class RequestAnimalsService {

  constructor(private http: HttpClient) { }

  getAllAnimals(): Observable<CompleteAnimalI[]> {
    return this.http.get<CompleteAnimalI[]>(animalsUrl);
  }

  getSpecificAnimal(id: number): Observable<CompleteAnimalI> {
    return this.http.get<CompleteAnimalI>(animalsUrl + id.toString())
  }
}
