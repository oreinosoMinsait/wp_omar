import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Technique } from 'src/app/models/technique.model';

@Component({
  selector: 'app-videl',
  templateUrl: './videl.component.html',
  styleUrls: ['./videl.component.scss']
})
export class VidelComponent {

  @Input() public videlTechniquesVd: Technique[] = [];
  @Output() public emitVidelTechniqueVd: EventEmitter<Technique> = new EventEmitter<Technique>();

  public sendNewVidelTechniqueVd(tech: Technique) {
    console.log(tech);
    this.emitVidelTechniqueVd.emit(tech);
  }

}
