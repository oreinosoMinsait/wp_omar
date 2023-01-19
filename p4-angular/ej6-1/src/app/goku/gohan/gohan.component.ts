import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Technique } from 'src/app/models/technique.model';

@Component({
  selector: 'app-gohan',
  templateUrl: './gohan.component.html',
  styleUrls: ['./gohan.component.scss']
})
export class GohanComponent implements OnInit {

  // Recibe y muestra
  @Input() public gohanTechniquesGh: Technique[] = [];

  public videlLearnedGh: Technique[] = [];
  public videlTechniquesGh: Technique[] = [];
  

  // Envía
  @Output() public emitGohanTechniqueGh: EventEmitter<Technique> = new EventEmitter<Technique>();
  @Output() public emitVidelTechniqueGh: EventEmitter<Technique[]> = new EventEmitter<Technique[]>();

  // Necesario poner el ngOnInit porque si no el filter lo haría con el valor inicial (array vacío)
  ngOnInit() {
    // Filtra técnicas fáciles
    this.videlTechniquesGh = this.gohanTechniquesGh.filter((tech) => tech.complexity === 'low');
  }

  // EVENTO - Envía Gohan
  public sendNewGohanTechniqueGh(tech: Technique) {
    console.log(tech);
    this.emitGohanTechniqueGh.emit(tech);
  }

  // EVENTO - Recibe Videl
  public addVidelLearnedGh(tech: Technique) {
    if(!this.videlLearnedGh.includes(tech)) {
      this.videlLearnedGh.push(tech);
      this.sendVidelTechniquesGh(this.videlLearnedGh);
    }

  }

  // EVENTO - Envía Videl
  public sendVidelTechniquesGh(techs: Technique[]) {
    this.emitVidelTechniqueGh.emit(techs);
  }

}
