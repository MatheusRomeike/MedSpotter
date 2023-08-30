import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dados-paciente-root',
  templateUrl: './dados-paciente-root.component.html',
  styleUrls: ['./dados-paciente-root.component.scss'],
})
export class DadosPacienteRootComponent {
  sliderValue = 1;
  formDadosPessoais = new FormGroup({
    nome: new FormControl(''),
    cpf: new FormControl(''),
    dataNascimento: new FormControl(''),
    sexo: new FormControl(''),
    telefone: new FormControl('', Validators.required),
    estadoCivil: new FormControl('', Validators.required),
    profissao: new FormControl('', Validators.required),
    nacionalidade: new FormControl('', Validators.required),
  });
}
