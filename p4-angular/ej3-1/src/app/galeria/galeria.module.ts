import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaComponent } from './galeria.component';
import { GaleriaHeaderComponent } from './galeria-header/galeria-header.component';
import { GaleriaBodyComponent } from './galeria-body/galeria-body.component';
import { GaleriaFooterComponent } from './galeria-footer/galeria-footer.component';



@NgModule({
  declarations: [
    GaleriaComponent,
    GaleriaHeaderComponent,
    GaleriaBodyComponent,
    GaleriaFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GaleriaComponent
  ]
})
export class GaleriaModule { }
