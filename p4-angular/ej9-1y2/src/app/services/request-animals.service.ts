import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'https://acnhapi.com/v1a/';
const animalsUrl = baseUrl + 'fish/';

@Injectable()
export class RequestAnimalsService {

  constructor(private http: HttpClient) { }

  getAllAnimals() {
    return this.http.get(animalsUrl);
  }
}
