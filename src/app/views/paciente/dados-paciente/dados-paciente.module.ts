import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadosPacienteRootComponent } from './dados-paciente-root/dados-paciente-root.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DadosPacienteRoutingModule } from './dados-paciente.routing.module';
import { DadosPessoaisComponent } from './components/dados-pessoais/dados-pessoais.component';
import { EnderecoComponent } from './components/endereco/endereco.component';
import { DependentesComponent } from './components/dependentes/dependentes.component';

@NgModule({
  imports: [SharedModule, DadosPacienteRoutingModule],
  declarations: [
    DadosPacienteRootComponent,
    DadosPessoaisComponent,
    EnderecoComponent,
    DependentesComponent,
  ],
  exports: [EnderecoComponent],
})
export class DadosPacienteModule {}
