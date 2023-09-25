import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss'],
})
export class AgendamentoComponent implements OnInit {
  form: any;

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
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      data: [''],
      convenio: [''],
    });
  }

  agendar() {}
}
