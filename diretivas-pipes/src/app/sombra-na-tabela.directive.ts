import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[sombraNoElemento]'
  // selector: '[appSombraNaTabela]'
  //selector: 'table'     // Selector por tipo, aplica emm todas as tabelas automaticamente
})
export class SombraNaTabelaDirective {

  @HostBinding ('style.boxShadow') sombra!: string
  @Input() sombraEntrada!: string

  @HostListener('mouseover') quandoOMousePassarPorCima (): void {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'box-shadow', '10px 10px'
    // )
    this.sombra = this.sombraEntrada
  }

  @HostListener('mouseleave') quandoOMouseSair (): void {
    // this.renderer.removeStyle(
    //   this.elementRef.nativeElement,
    //   'box-shadow'
    // )
    this.sombra = ""
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
