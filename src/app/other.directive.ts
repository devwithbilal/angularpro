import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOther]'
})
export class OtherDirective {

  constructor(
    private a: ElementRef,
  ) {

  }

  @HostListener('mouseenter') onmouseenter() {
    this.highlight('white');
    this.highlight('30px');
    this.highlight('robotong');
    this.highlight('solid 5px green');


  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  private highlight(abc: string) {
    this.a.nativeElement.style.backgroundColor = abc;
    this.a.nativeElement.style.border = abc;
    this.a.nativeElement.style.fontSize = abc;
    this.a.nativeElement.style.fontFamily = abc;

    // this.a.nativeElement.style.border = abc;
    // this.a.nativeElement.style.lineHeight = '1';
    // this.a.nativeElement.style.padding = '5px';
  }
}
