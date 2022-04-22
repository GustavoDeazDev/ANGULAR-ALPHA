import { Component } from '@angular/core';
@Component({
  selector: 'app-pipe-nativo',
  templateUrl: './pipe-nativo.component.html',
  styleUrls: ['./pipe-nativo.component.css']
})
export class PipeNativoComponent{
  // aqui, vamos criar as propriedades para aplicação dos pipes
  public texto: string = 'Pipes sensacionais!'
  public numFloat: number = 6589.25
  public dataHoje: Date  = new Date()
  public numInt: number = 789654123.987456
  public objLiteral = {
    nome: 'Yoda',
    idade: 89,
    endereco:{
      rua: 'Rua de Marte',
      numero: '01'
    }
  }
  public mesesAno: Array<string> = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
  public numPercent: number = 0.29

  // porpiedades para o Pipe Custom
  raizUm: number = 25
  raizDois: number = 1024
  raizTres: number = 81
  raizQuatro!: number 

}
