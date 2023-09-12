import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HistoricoAgendamentosDoctorRootComponent } from './historico-agendamentos-doctor-root/historico-agendamentos-doctor-root.component';
import { HistoricoAgendamentosDoctorRoutingModule } from './historico-agendamentos-doctor.routing.module';

@NgModule({
  imports: [SharedModule, HistoricoAgendamentosDoctorRoutingModule],
  declarations: [HistoricoAgendamentosDoctorRootComponent],
})
export class HistoricoAgendamentosDoctorModule {}
