import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss'],
})
export class AgendamentoComponent {
  @Input('form') form: any;

  agendar() {}
}
