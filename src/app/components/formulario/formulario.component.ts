import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{
  // criando as propriedades para controlar do form
  dadosform: any
  email: any

  // chamando o hook para priorizar a instancia daqs classes
  ngOnInit(){
    this.dadosform = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')
      ])),
      senha: new FormControl('', this.validacaoSenha)
    })
  }

  // criando função para validar senha
  validacaoSenha(valoresSenha: any){
    if(valoresSenha.value.length < 5){
      return{senha: true}
    }
    return null
  }

  // criando a função para receber o conjunto de dados enviado pela view
  receberDados(dados:any){
    this.email = dados.email
  }
}




/*
  // implementar a função para receber os dados
  enviarDados(dados: any){
    alert('O email informado foi: ' + dados.email)
  }
 */
