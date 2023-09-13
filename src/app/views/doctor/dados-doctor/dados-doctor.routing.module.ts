import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { DadosDoctorRootComponent } from './dados-doctor-root/dados-doctor-root.component';

const routes: Routes = [
  { path: '', component: DadosDoctorRootComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosDoctorRoutingModule {}
