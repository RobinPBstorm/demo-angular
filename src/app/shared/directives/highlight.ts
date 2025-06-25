import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[Highlight]',
  standalone: false
})
export class Highlight {

  constructor(private _elem: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this._elem.nativeElement.style.backgroundColor = '#ffff00';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._elem.nativeElement.style.backgroundColor = '#ffffdd';
  }

}
