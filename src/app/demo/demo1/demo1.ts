import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  standalone: false,
  templateUrl: './demo1.html',
  styleUrl: './demo1.scss'
})
export class Demo1{
  name: string = "Robin";

  labelBoutton: string = "Dire bonjour";

  bouttonDesactive: boolean = true;

  DireBonjour(): void{
    this.labelBoutton = `Bonjour ${this.name}`;
  }
}
