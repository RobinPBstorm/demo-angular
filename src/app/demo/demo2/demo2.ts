import { Component } from '@angular/core';

@Component({
  selector: 'app-demo2',
  standalone: false,
  templateUrl: './demo2.html',
  styleUrl: './demo2.scss'
})
export class Demo2 {
  message: string = 'Hello wolrd!';
  maDate: Date = new Date();
  celsius: number = 0;
}
