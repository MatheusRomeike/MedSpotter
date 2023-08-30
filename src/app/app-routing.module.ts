import { HistoricoAgendamentosModule } from './views/paciente/historico-agendamentos/historico-agendamentos.module';
import { DadosPacienteModule } from './views/paciente/dados-paciente/dados-paciente.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./views/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./views/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'doctor',
    loadChildren: () =>
      import('./views/doctor/doctor.module').then((m) => m.DoctorModule),
  },
  {
    path: 'dados-paciente',
    loadChildren: () =>
      import('./views/paciente/dados-paciente/dados-paciente.module').then(
        (m) => m.DadosPacienteModule
      ),
  },
  {
    path: 'historico-paciente',
    loadChildren: () =>
      import(
        './views/paciente/historico-agendamentos/historico-agendamentos.module'
      ).then((m) => m.HistoricoAgendamentosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor() {}
}
