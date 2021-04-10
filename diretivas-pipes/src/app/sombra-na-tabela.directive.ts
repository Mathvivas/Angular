import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSombraNaTabela]'
  //selector: 'table'     // Selector por tipo, aplica emm todas as tabelas automaticamente
})
export class SombraNaTabelaDirective {

  @HostListener('mouseover') quandoOMousePassarPorCima (): void {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'box-shadow', '10px 10px'
    )
  }

  @HostListener('mouseleave') quandoOMouseSair (): void {
    this.renderer.removeStyle(
      this.elementRef.nativeElement,
      'box-shadow'
    )
  }

  // Injeção de Dependência
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { 
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'box-shadow', '10px 10px'
    // )
   }

}
