import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
  // criando o "anunciador" do evento que enviará um conjunto de dados deste componente (componente filho) para o componente pai (principal)
  @Output() mostrarDados = new EventEmitter<any>()

  // propriedade que receberá o conjunto de dados
  public objDados: any = {}

  // função para enviar os dados
  public enviarDados(): void {
    this.mostrarDados.emit(this.objDados)
  }

}
