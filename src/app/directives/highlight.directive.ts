import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

  constructor(private _elemRef: ElementRef, private _renderer: Renderer2) {
  }

  @HostListener('mouseenter') mouseEnter(eventData: Event){
    //this._renderer.setStyle(this._elemRef.nativeElement, 'backgroundColor', 'yellow');
    this.backgroundColor = 'red';
    console.log(this._elemRef);
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event){
    //this._renderer.setStyle(this._elemRef.nativeElement, 'backgroundColor', 'transparent');
    this.backgroundColor = 'transparent';
  }

}
