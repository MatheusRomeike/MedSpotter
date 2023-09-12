import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HistoricoAgendamentosRootComponent } from './historico-agendamentos-root/historico-agendamentos-root.component';
import { HistoricoAgendamentosRoutingModule } from './historico-agendamentos.routing.module';
import { HistoricoAgendamentosComponent } from './components/historico-agendamentos/historico-agendamentos.component';

@NgModule({
  imports: [SharedModule, HistoricoAgendamentosRoutingModule],
  declarations: [
    HistoricoAgendamentosRootComponent,
    HistoricoAgendamentosComponent,
  ],
})
export class HistoricoAgendamentosModule {}
