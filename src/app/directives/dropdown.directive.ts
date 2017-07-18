import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') open: boolean = false;


  constructor(private _elemRef: ElementRef) {
  }

  @HostListener('click') onToggleDropdown(){
    this.open = !this.open;
  }

}
