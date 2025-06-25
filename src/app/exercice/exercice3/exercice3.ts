import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  standalone: false,
  templateUrl: './exercice3.html',
  styleUrl: './exercice3.scss'
})
export class Exercice3 {
  messageErreur: string = "";
  listeCourse: string[] = [];

  ajouterArticle(article: string) {
    if (this.listeCourse.includes(article)){
      this.messageErreur = "Cet aricle existe déjà";
      setTimeout(() => {
        this.messageErreur = "";
      }, 4000);
    }
    else {
      this.listeCourse.push(article);
    }
  }
  retirerArticle(index: number){
    this.listeCourse.splice(index,1);
  }
}
