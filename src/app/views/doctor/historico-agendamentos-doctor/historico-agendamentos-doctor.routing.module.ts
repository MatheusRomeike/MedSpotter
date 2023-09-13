import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { HistoricoAgendamentosDoctorRootComponent } from './historico-agendamentos-doctor-root/historico-agendamentos-doctor-root.component';

const routes: Routes = [
  {
    path: '',
    component: HistoricoAgendamentosDoctorRootComponent,
    canActivate: [AuthGuard],
    data: { tipoUsuario: 'medico' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoricoAgendamentosDoctorRoutingModule {}
