import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHeader]'
})
export class HeaderDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  @HostListener('mouseenter') mouseover (eventData: Event) {
    this.backgroundColor = '#A9A9A9';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'transparent'
  }


}

