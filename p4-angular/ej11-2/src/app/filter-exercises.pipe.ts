import { Pipe, PipeTransform } from '@angular/core';
import { Exercise } from './models/exercise.models';

@Pipe({
  name: 'filterExercises'
})
export class FilterExercisesPipe implements PipeTransform {

  transform(list: Exercise[], filtSelect: string, textToFilter: string ='') {
    
    const lcTextToFilter = textToFilter.toLowerCase().trim();
    let propertyList: string[] = [];
    const filteredList: Exercise[] = [];
    // Habría que crear un tipo de dato con valores restringidos para filterSelector

    console.log(filtSelect);
    
    switch (filtSelect) {
      case 'name':
        propertyList = list.map(element => (element.name));
        break;
      
      case 'muscle':
        propertyList = list.map(element => (element.muscle));
        break;

      case 'equipment':
        propertyList = list.map(element => (element.equipment));
        break;
    }

    propertyList.forEach(
      (element, index) => {
        if(element.toLowerCase().includes(lcTextToFilter)) {
          filteredList.push(list[index]);
        }
      }
    )
    
    return filteredList;
  }

}
