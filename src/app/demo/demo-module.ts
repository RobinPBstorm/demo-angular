import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing-module';
import { Demo1 } from './demo1/demo1';
import { FormsModule } from '@angular/forms';
import { Demo2 } from './demo2/demo2';
import { SharedModule } from '../shared/shared-module';


@NgModule({
  declarations: [
    Demo1,
    Demo2
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class DemoModule { }
