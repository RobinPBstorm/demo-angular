import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercice1 } from './exercice1/exercice1';
import { Exercice2 } from './exercice2/exercice2';

const routes: Routes = [
  { path: 'exercice1', component: Exercice1 },
  { path: 'exercice2', component: Exercice2 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
