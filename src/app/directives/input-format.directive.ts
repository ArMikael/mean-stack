import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  constructor(private el: ElementRef) { }

  @Input('appInputFormat') formatType;

  @HostListener('focus') onFocus() {
    this.el.nativeElement.style.fontWeight = 600;
  }

  @HostListener('blur') onBlur() {
    const value = this.el.nativeElement.value;
    this.el.nativeElement.style.fontWeight = 400;

    this.formatType === 'uppercase' ? this.el.nativeElement.value = value.toUpperCase()
      : this.el.nativeElement.value = value.toLowerCase();
  }
}
