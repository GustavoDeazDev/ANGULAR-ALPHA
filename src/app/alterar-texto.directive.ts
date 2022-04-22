import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAlterarTexto]'
})
export class AlterarTextoDirective {

  constructor(elementoHTML: ElementRef) { 
    console.log(elementoHTML);
    elementoHTML.nativeElement.innerText = 'Texto inserido - na view - a partir da diretiva de componente!'

  }

}
