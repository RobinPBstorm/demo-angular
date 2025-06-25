import { Component } from '@angular/core';

@Component({
  selector: 'app-demo4',
  standalone: false,
  templateUrl: './demo4.html',
  styleUrl: './demo4.scss'
})
export class Demo4 {
  prenomComposant: string = 'Robin';

  jeuDemandeParEnfant: string = '';

  receivedGame(jeu: string) {
    this.jeuDemandeParEnfant = `Le composant enfant veut faire du ${jeu}`;
  }
}
