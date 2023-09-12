import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HistoricoAgendamentosPacienteRoutingModule } from './historico-agendamentos-paciente.routing.module';
import { HistoricoAgendamentosPacienteRootComponent } from './historico-agendamentos-paciente-root/historico-agendamentos-paciente-root.component';

@NgModule({
  imports: [SharedModule, HistoricoAgendamentosPacienteRoutingModule],
  declarations: [HistoricoAgendamentosPacienteRootComponent],
})
export class HistoricoAgendamentosPacienteModule {}
