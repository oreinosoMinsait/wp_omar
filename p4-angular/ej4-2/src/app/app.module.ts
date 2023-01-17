import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MuestraImagenModule } from './muestra-imagen/muestra-imagen.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MuestraImagenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
