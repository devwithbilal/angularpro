import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOther]'
})
export class OtherDirective {

  constructor(
    private a: ElementRef,
  ) {

  }

  @HostListener('click') onClick() {
    this.highlight('gray');
    this.highlight('solid 2px green');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('2');
  }
  private highlight(abc: string) {
    this.a.nativeElement.style.backgroundColor = abc;
    this.a.nativeElement.style.border = abc;
    this.a.nativeElement.style.lineHeight = abc;
    // this.a.nativeElement.style.fontSize = '20px';
    // this.a.nativeElement.style.border = 'solid 2px green';
    // this.a.nativeElement.style.lineHeight = '1';
    // this.a.nativeElement.style.padding = '5px';
  }
}
