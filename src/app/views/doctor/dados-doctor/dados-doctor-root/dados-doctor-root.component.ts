import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dados-doctor-root',
  templateUrl: './dados-doctor-root.component.html',
  styleUrls: ['./dados-doctor-root.component.scss'],
})
export class DadosDoctorRootComponent {
  sliderValue = 1;
  formDadosPessoais = new FormGroup({
    nome: new FormControl(''),
    crm: new FormControl(''),
    dataNascimento: new FormControl(''),
    sexo: new FormControl(''),
    telefone: new FormControl('', Validators.required),
    estadoCivil: new FormControl('', Validators.required),
    nacionalidade: new FormControl('', Validators.required),
    especialidades: new FormControl('', Validators.required),
  });
}
