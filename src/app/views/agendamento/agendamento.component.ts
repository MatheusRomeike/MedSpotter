import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss'],
})
export class AgendamentoComponent {
  @Input('form') form: any;

  doctor = {
    name: 'Doutor Ricardo Lasmar',
    specialties: [
      { id: 2, description: 'Ginecogista', main: true },
      { id: 2, description: 'Reprodução Humana', main: false },
      { id: 3, description: 'Cirurgia Ginecológica', main: false },
      { id: 4, description: 'Obstetrícia', main: false },
      { id: 5, description: 'Implantes Hormonais', main: false },
    ],
    ratingAvg: 4.8,
    ratingCount: 125,
  };

  agendar() {}
}
