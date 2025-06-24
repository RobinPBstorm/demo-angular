import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo1 } from './demo1/demo1';

const routes: Routes = [
  {path: "demo1", component: Demo1}
  { path: "", redirectTo: "demo1", pathMatch: 'full' },
  // futur redirection not found
  { path: "**", redirectTo: "demo1", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
