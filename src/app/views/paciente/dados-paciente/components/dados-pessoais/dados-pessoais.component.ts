import { AuthenticatorService } from 'src/app/shared/authenticator/authenticator.service';
import { DadosPacienteService } from './../../services/dados-paciente.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.scss'],
})
export class DadosPessoaisComponent implements OnInit {
  @Input('form') form: any;

  constructor(
    private dadosPacienteService: DadosPacienteService,
    private authenticatorService: AuthenticatorService
  ) {}

  async ngOnInit() {
    this.form.get('nome').disable();
    this.form.get('cpf').disable();
    this.form.get('dataNascimento').disable();
    this.form.get('sexo').disable();
    await this.obterDados();
    this.form.get('telefone').valueChanges.subscribe(async (telefone: any) => {
      const usuarioId = this.authenticatorService.obterUsuarioId();
      await this.dadosPacienteService.atualizarTelefone(usuarioId, telefone);
    });
  }

  async obterDados() {
    const usuarioId = this.authenticatorService.obterUsuarioId();
    var dados: any = await this.dadosPacienteService.obterDados(usuarioId);
    dados.dataNascimento = new Date(dados.dataNascimento).toLocaleDateString(
      'pt-BR'
    );

    this.form.patchValue(dados);
  }
}
