import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginRoutingModule } from './login.routing.module';
import { LoginRootComponent } from './login-root/login-root.component';

@NgModule({
  imports: [SharedModule, LoginRoutingModule],
  declarations: [LoginRootComponent],
  exports: [LoginRootComponent],
})
export class LoginModule {}
