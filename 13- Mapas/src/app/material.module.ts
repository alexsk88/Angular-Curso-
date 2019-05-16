import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatCardModule
  ],
  exports: [
    // Esto es obligatorio ya que hay que exportarlos para que sean
    // utilizados en otras partes del modulo
    MatToolbarModule,
    MatProgressBarModule,
    MatCardModule
  ]
})
export class MaterialModule { }
