import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'enfant',
  standalone: false,
  templateUrl: './enfant.html',
  styleUrl: './enfant.scss'
})
export class Enfant {
  @Input() prenomParent : string;

  @Output() onGameSelect: EventEmitter<string>;

  constructor() {
    this.prenomParent = '';
    this.onGameSelect = new EventEmitter<string>();
  }

  sendGame(jeu: string) {
    this.onGameSelect.emit(jeu);
  }
}
