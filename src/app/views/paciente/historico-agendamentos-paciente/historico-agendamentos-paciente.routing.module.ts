import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { HistoricoAgendamentosPacienteRootComponent } from './historico-agendamentos-paciente-root/historico-agendamentos-paciente-root.component';

const routes: Routes = [
  {
    path: '',
    component: HistoricoAgendamentosPacienteRootComponent,
    canActivate: [AuthGuard],
    data: { tipoUsuario: 'paciente' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoricoAgendamentosPacienteRoutingModule {}
