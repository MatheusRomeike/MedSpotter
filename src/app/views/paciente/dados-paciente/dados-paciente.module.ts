import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadosPacienteRootComponent } from './dados-paciente-root/dados-paciente-root.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DadosPacienteRoutingModule } from './dados-paciente.routing.module';

@NgModule({
  imports: [SharedModule, DadosPacienteRoutingModule],
  declarations: [DadosPacienteRootComponent],
})
export class DadosPacienteModule {}
