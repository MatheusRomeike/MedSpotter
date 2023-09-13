import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-dados-pessoais-doctor',
  templateUrl: './dados-pessoais-doctor.component.html',
  styleUrls: ['./dados-pessoais-doctor.component.scss'],
})
export class DadosPessoaisDoctorComponent implements OnInit {
  @Input('form') form: any;

  dropdownList: any;
  dropdownSettings: any;

  constructor() {}

  ngOnInit() {
    this.form.get('nome').disable();
    this.form.get('crm').disable();
    this.form.get('dataNascimento').disable();
    this.form.get('sexo').disable();

    this.dropdownList = [
      { id: 1, text: 'Cardiologia' },
      { id: 2, text: 'Pneumologia' },
      { id: 3, text: 'Radiografia' },
      { id: 4, text: 'Odontologia' },
      { id: 5, text: 'Ecografia' },
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'text',
      selectAllText: 'Selecionar Tudo',
      unSelectAllText: 'Desmarcar Tudo',
      itemsShowLimit: 4,
      allowSearchFilter: true,
    };
  }
}
