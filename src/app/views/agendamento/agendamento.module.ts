import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendamentoRoutingModule } from './agendamento-routing.module';
import { AgendamentoComponent } from './agendamento.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AgendamentoComponent],
  imports: [CommonModule, AgendamentoRoutingModule, SharedModule],
  exports: [AgendamentoComponent],
})
export class AgendamentoModule {}
