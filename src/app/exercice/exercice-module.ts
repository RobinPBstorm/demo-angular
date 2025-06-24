import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing-module';
import { Exercice1 } from './exercice1/exercice1';


@NgModule({
  declarations: [
    Exercice1
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule
  ]
})
export class ExerciceModule { }
