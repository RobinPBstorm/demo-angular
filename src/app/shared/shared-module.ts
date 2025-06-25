import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu } from './menu/menu';
import { RouterModule } from '@angular/router';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit-pipe';
import { Highlight } from './directives/highlight';



@NgModule({
  declarations: [
    Menu,
    ToFahrenheitPipe,
    Highlight
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    Menu,
    ToFahrenheitPipe,
    Highlight
  ]
})
export class SharedModule { }
