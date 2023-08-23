import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginRoutingModule } from './login.routing.module';
import { LoginRootComponent } from './login-root/login-root.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  imports: [SharedModule, LoginRoutingModule],
  declarations: [LoginRootComponent, LoginComponent, RegisterComponent],
})
export class LoginModule {}
