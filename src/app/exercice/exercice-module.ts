import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing-module';
import { Exercice1 } from './exercice1/exercice1';
import { NumberToTimePipe } from './pipes/number-to-time-pipe';
import { Exercice2 } from './exercice2/exercice2';
import { SharedModule } from '../shared/shared-module';
import { Exercice3 } from './exercice3/exercice3';


@NgModule({
  declarations: [
    Exercice1,
    NumberToTimePipe,
    Exercice2,
    Exercice3
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    SharedModule
  ]
})
export class ExerciceModule { }
