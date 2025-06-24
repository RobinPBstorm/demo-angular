import { Component } from '@angular/core';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-exercice1',
  standalone: false,
  templateUrl: './exercice1.html',
  styleUrl: './exercice1.scss'
})
export class Exercice1 {
  chrono: number = 0;
  intervale: any | null;
  enCours: boolean = false;

  play(): void{
    this.intervale = setInterval(
      ()=> this.chrono++,
      1000
    );
    this.enCours = true;
  }
  pause(): void{
    clearInterval(this.intervale);
    this.enCours = false;
  }
  reset(): void{
    this.pause();
    this.chrono = 0;
  }
}
