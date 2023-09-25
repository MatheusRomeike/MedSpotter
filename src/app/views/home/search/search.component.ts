import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  response: any;
  doctor = {
    name: 'Doutor Ricardo Lasmar',
    specialties: [
      { id: 2, description: 'Ginecogista, ', main: true },
      { id: 2, description: 'Reprodução Humana, ', main: false },
      { id: 3, description: 'Cirurgia Ginecológica, ', main: false },
      { id: 4, description: 'Obstetrícia, ', main: false },
      { id: 5, description: 'Implantes Hormonais.', main: false },
    ],
    convenios: [
      { id: 2, description: 'Amil, ' },
      { id: 2, description: 'Bradesco, ' },
      { id: 3, description: 'Unimed.' },
    ],
    ratingAvg: 4.8,
    ratingCount: 125,
  };

  dropdownList = [
    { id: 1, text: 'Cardiologia' },
    { id: 2, text: 'Pneumologia' },
    { id: 3, text: 'Radiografia' },
    { id: 4, text: 'Odontologia' },
    { id: 5, text: 'Ecografia' },
  ];
  dropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'text',
    selectAllText: 'Selecionar Tudo',
    unSelectAllText: 'Desmarcar Tudo',
    itemsShowLimit: 4,
    allowSearchFilter: true,
  };
  form: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      localidade: [''],
      especialidade: [''],
      convenio: [''],
    });
  }

  search() {
    this.response = this.doctor;
  }
}
