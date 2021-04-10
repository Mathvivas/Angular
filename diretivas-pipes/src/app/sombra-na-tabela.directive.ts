import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSombraNaTabela]'
})
export class SombraNaTabelaDirective {

  // Injeção de Dependência
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { 
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'box-shadow', '10px 10px'
    )
   }

}
