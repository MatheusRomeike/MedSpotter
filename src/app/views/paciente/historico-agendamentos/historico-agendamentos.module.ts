import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HistoricoAgendamentosRootComponent } from './historico-agendamentos-root/historico-agendamentos-root.component';
import { HistoricoAgendamentosRoutingModule } from './historico-agendamentos.routing.module';

@NgModule({
  imports: [SharedModule, HistoricoAgendamentosRoutingModule],
  declarations: [HistoricoAgendamentosRootComponent],
})
export class HistoricoAgendamentosModule {}
