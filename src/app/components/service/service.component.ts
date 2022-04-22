import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import { Produto } from '../../product';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent{
// casting das propriedades
produto!: Produto[]


  constructor(private productService: ProductService) {
    
  }
  // fazer uso do objeto productService para acessar o recurso-função
  obterConteudo(){
    this.produto = this.productService.getProdutos()
  }
}
