import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosPacienteRootComponent } from './dados-paciente-root.component';

describe('DadosPacienteRootComponent', () => {
  let component: DadosPacienteRootComponent;
  let fixture: ComponentFixture<DadosPacienteRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DadosPacienteRootComponent]
    });
    fixture = TestBed.createComponent(DadosPacienteRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
