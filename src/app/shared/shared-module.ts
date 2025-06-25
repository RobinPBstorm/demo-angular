import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu } from './menu/menu';
import { RouterModule } from '@angular/router';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit-pipe';
import { Highlight } from './directives/highlight';
import { ColorSyntaxe } from './directives/code/color-syntaxe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    Menu,
    ToFahrenheitPipe,
    Highlight,
    ColorSyntaxe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    Menu,
    ToFahrenheitPipe,
    Highlight,
    ColorSyntaxe,
    FormsModule
  ]
})
export class SharedModule { }
