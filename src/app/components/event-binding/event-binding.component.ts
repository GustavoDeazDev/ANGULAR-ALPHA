import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  // aqui, vamos criar uma função para ser vinculada a partir de um evento disparado na view
  public exibitAlerta(): void {
    console.log('Evento Disparado...')
    alert('Evento disparado...')
  }
}
