import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-alpha'
  
  
}


/* AQUI VAMOS GUARDAR OS CÓDIGOS QUE DERAM CERTO

// criando as propriedades cujo valores serão enviados para o componente secundario
  public texto: string = 'Este é o texto que será exibido na janela de alerta'
  public outroTexto: string = 'Texto enviado do componente-principal para o componente-secundario'


// variável para tratar e exibir os dados recebidos
    let receptora: string = 'Obrigado por se cadastrar ' + dados.nome + '.' + '\n';
    receptora += 'O e-mail ' + dados.email + ' foi cadastrado com sucesso!'

    alert(receptora)


// implementando a função para receber os dados enviados
  public exibirDados(dados:any): void {

    // criando as propriedades necessarias
  exibirFilho: boolean = false

  constructor(){
    console.log('O construtor de AppComponent foi chamado!')
  }

  inversao(){
    this.exibirFilho =! this.exibirFilho
  }

  // implementação dos hooks
  ngOnChanges(){
    console.log('Componente-pai: hook OnChanges')
  }

  ngOnInit(){
    console.log('Componente-pai: hook OnInit')
  }
  
  ngDoCheck(){
    console.log('Componente-pai: hook DoCheck')
  }

 ngAfterContentInit(){
   console.log('Componente-pai: hook AfterContentInit')
 }
 ngAfterContentChecked(){
   console.log('Componente-pai: hook AfterContentChecked')
 }
 ngAfterViewInit(){
   console.log('Componente-pai: hook AfterViewInit')
 }
 ngAfterViewChecked(){
   console.log('Componente-pai: hook AfterViewChecked')
 }
 ngOnDestroy(){
   console.log('Componente-pai: hook OnDestroy')
 }


*/

