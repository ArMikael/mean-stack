import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus() {
    console.log('Focus');
    this.el.nativeElement.style.fontWeight = 600;
  }

  @HostListener('blur') onBlur() {
    const value = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toLowerCase();
    this.el.nativeElement.style.fontWeight = 400;
  }
}
