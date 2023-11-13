import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { Interceptor } from './shared/interceptor/interceptor';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './guards/auth.guard';
import { LoginRootComponent } from './views/login/login-root/login-root.component';
import { AgendamentoComponent } from './views/agendamento/agendamento.component';

const authenticatorService = [Interceptor];

@NgModule({
  declarations: [AppComponent],
  providers: [
    authenticatorService,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
    AuthGuard,
  ],
  bootstrap: [AppComponent],
  exports: [AppComponent, BrowserAnimationsModule],
  imports: [AppRoutingModule, BrowserAnimationsModule, SharedModule],
})
export class AppModule {}
