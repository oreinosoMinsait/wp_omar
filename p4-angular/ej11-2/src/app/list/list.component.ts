import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { exercises } from '../exercises';
import { Exercise } from '../models/exercise.models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public filterInput: string = '';
  public filterSelector: FormControl = new FormControl('name');

  public exercisesList: Exercise[] = exercises;

}
