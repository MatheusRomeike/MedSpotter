import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosDoctorRootComponent } from './dados-doctor-root.component';

describe('DadosPacienteRootComponent', () => {
  let component: DadosDoctorRootComponent;
  let fixture: ComponentFixture<DadosDoctorRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DadosDoctorRootComponent],
    });
    fixture = TestBed.createComponent(DadosDoctorRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
