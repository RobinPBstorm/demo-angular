import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercice1 } from './exercice1/exercice1';

const routes: Routes = [
  { path: 'exercice1', component: Exercice1 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
