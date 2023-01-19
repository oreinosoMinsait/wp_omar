import { Component, OnInit } from '@angular/core';
import { Technique } from '../models/technique.model';
import { techniques } from '../techniques/techniques';

@Component({
  selector: 'app-goku',
  templateUrl: './goku.component.html',
  styleUrls: ['./goku.component.scss']
})
export class GokuComponent implements OnInit {

  // Lee de archivo y muestra
  public gokuTechniquesGk: Technique[] = techniques;

  // Recibe y muestra:
  public gohanLearnedGk: Technique[] = [];
  public videlLearnedGk: Technique[] = [];

  // Calcula y envía
  public gohanTechniquesGk: Technique[] = [];

  ngOnInit() {
    // Filtra técnicas medias y fáciles
    for(const tech of this.gokuTechniquesGk) {
      if (tech.complexity === 'mid' || tech.complexity === 'low') {
        this.gohanTechniquesGk.push(tech);
      }
    }
  }

  // EVENTO - Recibe Gohan
  addGohanLearnedGk(newTechnique: Technique) {
    if(!this.gohanLearnedGk.includes(newTechnique)) {
      this.gohanLearnedGk.push(newTechnique);
    }
  }

  // EVENTO - Recibe Videl
  getVidelLearned(techs: Technique[]) {
    this.videlLearnedGk = techs;
  }

}