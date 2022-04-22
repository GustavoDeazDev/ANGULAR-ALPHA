import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent {
  // criando a propriedade para ser avaliada na view pela diretiva *ngIf
  exibir!: boolean
}
