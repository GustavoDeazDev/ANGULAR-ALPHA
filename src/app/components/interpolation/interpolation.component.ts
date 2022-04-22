import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  // criando as propriedades para data binding interpolation
  public x: number = 10
  public umArray: Array<number> = [10, 22, 14]
  public dataHoje: Date = new Date()
  
  public statusBooleano: boolean = true

  public exibirTexto() : string {
    return 'Texto retornado a partir de uma função'
  }
}
