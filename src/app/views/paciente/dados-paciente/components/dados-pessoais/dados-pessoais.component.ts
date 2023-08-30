import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.scss'],
})
export class DadosPessoaisComponent implements OnInit {
  @Input('form') form: any;

  constructor() {}

  ngOnInit() {
    this.form.get('nome').disable();
    this.form.get('cpf').disable();
    this.form.get('dataNascimento').disable();
    this.form.get('sexo').disable();
  }
}
