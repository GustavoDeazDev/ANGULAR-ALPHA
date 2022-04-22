import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filho-zero',
  templateUrl: './filho-zero.component.html',
  styleUrls: ['./filho-zero.component.css']
})
export class FilhoZeroComponent {

  // definindo as propriedades
  @Input() mensagem: string = ''
  constructor() { 
    console.log('O construtor Componente-filho foi chamado')
  }

  // implementação dos hooks
  ngOnChanges(){
    console.log('Componente-filho: hook OnChanges')
  }

  ngOnInit(){
    console.log('Componente-filho: hook OnInit')
  }
  
  ngDoCheck(){
    console.log('Componente-filho: hook DoCheck')
  }

 ngAfterContentInit(){
   console.log('Componente-filho: hook AfterContentInit')
 }
 ngAfterContentChecked(){
   console.log('Componente-filho: hook AfterContentChecked')
 }
 ngAfterViewInit(){
   console.log('Componente-filho: hook AfterViewInit')
 }
 ngAfterViewChecked(){
   console.log('Componente-filho: hook AfterViewChecked')
 }
 ngOnDestroy(){
   console.log('Componente-filho: hook OnDestroy')
 }

}
