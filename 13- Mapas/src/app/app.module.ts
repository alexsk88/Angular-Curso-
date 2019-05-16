import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular Projectos

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';

import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    // Este es el modulo del Mapa de Google
    // Esta libreria de mapas es propia de Angular
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMU0uLU7-HoRERFegmnwW4tB4k3y7m1Fo'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
