import { DadosDoctorModule } from './views/doctor/dados-doctor/dados-doctor.module';
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
    path: 'perfil-paciente',
    loadChildren: () =>
      import('./views/paciente/dados-paciente/dados-paciente.module').then(
        (m) => m.DadosPacienteModule
      ),
  },
  {
    path: 'historico-paciente',
    loadChildren: () =>
      import(
        './views/paciente/historico-agendamentos-paciente/historico-agendamentos-paciente.module'
      ).then((m) => m.HistoricoAgendamentosPacienteModule),
  },
  {
    path: 'historico-medico',
    loadChildren: () =>
      import(
        './views/doctor/historico-agendamentos-doctor/historico-agendamentos-doctor.module'
      ).then((m) => m.HistoricoAgendamentosDoctorModule),
  },
  {
    path: 'perfil-medico',
    loadChildren: () =>
      import('./views/doctor/dados-doctor/dados-doctor.module').then(
        (m) => m.DadosDoctorModule
      ),
  },
  {
    path: 'agendamento',
    loadChildren: () =>
      import('./views/agendamento/agendamento.module').then(
        (m) => m.AgendamentoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor() {}
}
