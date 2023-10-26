import { AuthenticatorService } from 'src/app/shared/authenticator/authenticator.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DadosPacienteService } from '../../services/dados-paciente.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dependentes',
  templateUrl: './dependentes.component.html',
  styleUrls: ['./dependentes.component.scss'],
})
export class DependentesComponent implements OnInit {
  @ViewChild('modal') modal: any;

  form = this.formBuilder.group({
    nome: ['', Validators.required],
    sobrenome: ['', Validators.required],
    dataNascimento: ['', Validators.required],
    grauParentesco: ['', Validators.required],
  });

  dependentes: any;
  dependenteId: any;

  tituloModal = 'Adicionar';

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private dadosPacienteService: DadosPacienteService,
    private authenticatorService: AuthenticatorService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.listarDependentes();
  }

  async listarDependentes() {
    const usuarioId = this.authenticatorService.obterUsuarioId();
    this.dependentes = await this.dadosPacienteService.listar(usuarioId);
    console.log(this.dependentes);
  }

  cancelar() {
    this.modalService.dismissAll();
    this.form.reset();
  }

  async salvarDependente() {
    try {
      const usuarioId = this.authenticatorService.obterUsuarioId();
      const dependente = {
        ...this.form.value,
        usuarioId,
        vigente: true,
        id: this.dependenteId,
      };
      await this.dadosPacienteService.registrarDependente(dependente);
      this.listarDependentes();
      this.cancelar();
    } catch (error: any) {
      this.toastr.error(error.error, 'Erro');
    }
  }

  abrirModal() {
    this.modalService.open(this.modal, {
      size: 'lg',
      keyboard: false,
      backdrop: 'static',
    });
    this.form.get('logradouro')?.markAsTouched();
  }

  calculateAge(dataNascimento: string): number {
    const birthDate = new Date(dataNascimento);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  async alterarVigencia(id: number) {
    try {
      await this.dadosPacienteService.alterarVigencia(id);
      await this.listarDependentes();
    } catch (error: any) {
      this.toastr.error(error.error, 'Erro');
    }
  }

  editar(dependente: any) {
    dependente = {
      ...dependente,
      dataNascimento: new Date(dependente.dataNascimento)
        .toISOString()
        .split('T')[0],
    };
    this.form.patchValue(dependente);
    this.tituloModal = 'Editar';
    this.dependenteId = dependente.id;
    this.abrirModal();
  }
}
