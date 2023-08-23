import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadosPacienteRootComponent } from './dados-paciente-root/dados-paciente-root.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  { path: '', component: DadosPacienteRootComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosPacienteRoutingModule {}
