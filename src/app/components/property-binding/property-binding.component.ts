import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
  public x: number = 10
  public umArray: Array<number> = [10, 22, 14]
  public dataHoje: Date = new Date()
  
  public statusBooleano: boolean = true

  public exibirTexto() : string {
    return 'Texto retornado a partir de uma função'
  }
}
