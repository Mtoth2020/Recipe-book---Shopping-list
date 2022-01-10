import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  @HostListener('mouseenter') mouseover (eventData: Event) {
    this.backgroundColor = '#F08080';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'transparent'
  }


}

