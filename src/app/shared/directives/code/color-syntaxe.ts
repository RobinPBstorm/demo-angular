import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: 'syntaxe',
  standalone: false,
  inputs: ['type']
})
export class ColorSyntaxe implements OnInit{
  type: string = "";

  constructor(private _elem: ElementRef) { 
  }
  
  ngOnInit(): void {
    switch(this.type){
      case 'type':
        this._elem.nativeElement.style.color = '#5bb59b';
        break;
      case 'name':
        this._elem.nativeElement.style.color = '#8dbac5';
        break;
      case 'export':
        this._elem.nativeElement.style.color = '#ac8bc1';
        break;
      case 'class':
      case 'accessibility':
        this._elem.nativeElement.style.color = '#6085a4';
        break;
    }
  }

}
