import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DadosPessoaisDoctorComponent } from './components/dados-pessoais-doctor/dados-pessoais-doctor.component';
import { DadosDoctorRootComponent } from './dados-doctor-root/dados-doctor-root.component';
import { DadosDoctorRoutingModule } from './dados-doctor.routing.module';
import { DadosPacienteModule } from '../../paciente/dados-paciente/dados-paciente.module';

@NgModule({
  imports: [SharedModule, DadosDoctorRoutingModule, DadosPacienteModule],
  declarations: [DadosDoctorRootComponent, DadosPessoaisDoctorComponent],
})
export class DadosDoctorModule {}
