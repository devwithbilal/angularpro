import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[appHidding]',
})
export class HiddingDirective implements OnInit {

  @Input()
  delay=0;

  constructor(
  private viewContainerRef: ViewContainerRef,
  private templete: TemplateRef<any>,
  ){}

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.templete);
    setTimeout(() => {
      this.viewContainerRef.clear();
    }, this.delay);
  }
}

