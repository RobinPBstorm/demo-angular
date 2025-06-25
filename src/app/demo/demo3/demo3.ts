import { Component, OnInit } from '@angular/core';
import { Livre } from '../../shared/models/livre';

@Component({
  selector: 'app-demo3',
  standalone: false,
  templateUrl: './demo3.html',
  styleUrl: './demo3.scss'
})
export class Demo3 {
  enChartreuse: boolean = true;
  chartreuse: string = "#7FFF00";
  autreCouleur: string = "#7F00FF";

  mesNombres : number[] = [1, 2, 3, 4];

  mesLivres : Livre[] = [
    new Livre("Le tour du monde en 80 jours",300 , "aventure", "Jules Verne"),
    new Livre("Harry Potter: L'école des sorciers",350 ,"fantaisie" , "J.K. Rowling"),
  ];

  humeurDuJour: string = "";

  constructor(){
  }
}
