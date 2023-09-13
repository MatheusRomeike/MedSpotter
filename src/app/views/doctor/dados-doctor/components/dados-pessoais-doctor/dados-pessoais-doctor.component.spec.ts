/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DadosPessoaisDoctorComponent } from './dados-pessoais-doctor.component';

describe('DadosPessoaisDoctorComponent', () => {
  let component: DadosPessoaisDoctorComponent;
  let fixture: ComponentFixture<DadosPessoaisDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DadosPessoaisDoctorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosPessoaisDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
