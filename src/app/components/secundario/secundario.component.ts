import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secundario',
  templateUrl: './secundario.component.html',
  styleUrls: ['./secundario.component.css']
})
export class SecundarioComponent {
  // elementos para fazer uso do Input Property para data binding
  @Input() public mensagem: string = ''
  @Input('alerta') public outraMensagem: string = ''

  public exibirMensagemAlerta(): void {
    alert(this.outraMensagem)
  }

}
