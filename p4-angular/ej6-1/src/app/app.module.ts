import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GokuComponent } from './goku/goku.component';
import { GohanComponent } from './goku/gohan/gohan.component';
import { VidelComponent } from './goku/gohan/videl/videl.component';

@NgModule({
  declarations: [
    AppComponent,
    GokuComponent,
    GohanComponent,
    VidelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
