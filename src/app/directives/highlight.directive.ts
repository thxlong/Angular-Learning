import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = 'red';

    // thêm class
    this.elementRef.nativeElement.classList.add('active');

    // cách lấy width và height của 1 element
    console.log(this.elementRef.nativeElement.clientWidth);
    console.log(this.elementRef.nativeElement.clientHeight);
  }

  @HostListener('mouseenter') handlderMouseEnter() {
    this.elementRef.nativeElement.style.backgroundColor = 'blue';
    console.log(this.elementRef.nativeElement.clientWidth);
    console.log(this.elementRef.nativeElement.clientHeight);
  }

  @HostListener('mouseleave') handlerMouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }
}
