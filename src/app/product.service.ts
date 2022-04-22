import { Injectable } from '@angular/core';
// importando o model domain
import { Produto } from './product';
// importando o novo service
import { LoggerService } from './logger.service';

@Injectable()

export class ProductService {
  constructor(private loggerService: LoggerService){
    this.loggerService.verificacao('ProductService foi construido!')
  }
// criando o conteudo oferecido pelo service
public getProdutos(){
  this.loggerService.verificacao('metodo/função getProdutos foi chamado')
  let produtos: Produto[]
  // criando a lista de produtos
  produtos = [
    new Produto(1, 'Quadro Baby Yoda', 199),
    new Produto(2, 'Mascara Darth Vader', 159),
    new Produto(3,'LightSaber', 89)
  ]
  this.loggerService.verificacao(produtos)
  return produtos
}
  
}
