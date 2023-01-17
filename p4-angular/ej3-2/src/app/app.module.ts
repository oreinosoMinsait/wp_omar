import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescripcionModule } from './descripcion/descripcion.module';
import { ImagenModule } from './imagen/imagen.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DescripcionModule,
    ImagenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
