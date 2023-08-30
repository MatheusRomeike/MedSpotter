import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss'],
})
export class EnderecoComponent implements OnInit {
  @ViewChild('modal') modal: any;

  form = this.formBuilder.group({
    cep: ['', Validators.required],
    logradouro: ['', Validators.required],
    numero: ['', Validators.required],
    complemento: ['', Validators.required],
    bairro: ['', Validators.required],
    cidade: ['', Validators.required],
    estado: ['', Validators.required],
    tipoEndereco: ['', Validators.required],
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
  }
}
