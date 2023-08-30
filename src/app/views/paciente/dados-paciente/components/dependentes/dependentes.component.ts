import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  tituloModal = 'Adicionar';

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {}

  cancelar() {
    this.modalService.dismissAll();
    this.form.reset();
  }

  abrirModal() {
    this.modalService.open(this.modal, {
      size: 'lg',
      keyboard: false,
      backdrop: 'static',
    });
    this.form.get('logradouro')?.markAsTouched();
  }
}
