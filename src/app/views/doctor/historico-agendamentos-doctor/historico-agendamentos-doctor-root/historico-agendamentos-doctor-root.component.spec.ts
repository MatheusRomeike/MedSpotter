/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HistoricoAgendamentosDoctorRootComponent } from './historico-agendamentos-doctor-root.component';

describe('HistoricoAgendamentosDoctorRootComponent', () => {
  let component: HistoricoAgendamentosDoctorRootComponent;
  let fixture: ComponentFixture<HistoricoAgendamentosDoctorRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HistoricoAgendamentosDoctorRootComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoAgendamentosDoctorRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
