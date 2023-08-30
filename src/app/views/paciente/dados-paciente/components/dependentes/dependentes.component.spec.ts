/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DependentesComponent } from './dependentes.component';

describe('DependentesComponent', () => {
  let component: DependentesComponent;
  let fixture: ComponentFixture<DependentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
