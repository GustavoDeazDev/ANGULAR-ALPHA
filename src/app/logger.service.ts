import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  // função para ser acessada de dentro do product.service
  verificacao(texto: any){
    console.log(texto)
  }
}
