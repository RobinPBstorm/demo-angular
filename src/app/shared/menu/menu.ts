import { Component } from '@angular/core';
import { Link } from '../models/Link';

@Component({
  selector: 'menu',
  standalone: false,
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {
  mesLiens: Link[] = [
    new Link("Accueil", "/"),
    new Link("Les demos", undefined, [
      new Link("Les bindings", "demo/demo1", undefined, false),
      new Link("Les pipes", "demo/demo2", undefined, false),
      new Link("Les directives", "demo/demo3", undefined, false),
      new Link("Les inputs/ outputs", "demo/demo4", undefined, false),
    ]),
    new Link("Les exercices", undefined, [
      new Link("Le chrono", "exercice/exercice1", undefined, false),
      new Link("La navigation dynamique", "exercice/exercice2", undefined, false),
      new Link("La liste de course", "exercice/exercice3", undefined, false),
    ]),
  ]

  AfficherLien(lien: Link) {
    if (lien.children)
    {
      for (let lienEnfant of lien.children) {
        lienEnfant.isVisible = !lienEnfant.isVisible;
      }
    }
  }
}
