/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HistoricoAgendamentosPacienteRootComponent } from './historico-agendamentos-paciente-root.component';

describe('HistoricoAgendamentosRootComponent', () => {
  let component: HistoricoAgendamentosPacienteRootComponent;
  let fixture: ComponentFixture<HistoricoAgendamentosPacienteRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HistoricoAgendamentosPacienteRootComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(
      HistoricoAgendamentosPacienteRootComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
