import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing-module';
import { Exercice1 } from './exercice1/exercice1';
import { NumberToTimePipe } from './pipes/number-to-time-pipe';


@NgModule({
  declarations: [
    Exercice1,
    NumberToTimePipe
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule
  ]
})
export class ExerciceModule { }
