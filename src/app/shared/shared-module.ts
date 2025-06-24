import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu } from './menu/menu';
import { RouterModule } from '@angular/router';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit-pipe';



@NgModule({
  declarations: [
    Menu,
    ToFahrenheitPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    Menu,
    ToFahrenheitPipe
  ]
})
export class SharedModule { }
