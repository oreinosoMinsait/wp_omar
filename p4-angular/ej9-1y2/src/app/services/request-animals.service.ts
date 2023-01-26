import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { animalI } from '../models/animals.interface';
import { Observable } from 'rxjs';

const baseUrl = 'https://acnhapi.com/v1a/';
const animalsUrl = baseUrl + 'fish/';

@Injectable()
export class RequestAnimalsService {

  constructor(private http: HttpClient) { }

  getAllAnimals(): Observable<animalI[]> {
    return this.http.get<animalI[]>(animalsUrl);
  }

  getSpecificAnimal(id: number): Observable<animalI> {
    return this.http.get<animalI>(id.toString())
  }
}
