import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticatorService } from '../shared/authenticator/authenticator.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    private authenticatorService: AuthenticatorService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (route!.component!.name === 'LoginRootComponent') {
      this.authenticatorService.limparDados();
      return true;
    }

    var tipoUsuarioTela = route.data['tipoUsuario'] as string;
    if (tipoUsuarioTela != undefined) {
      var tipoUsuarioLogado = this.authenticatorService.obterTipoUsuario();

      if (tipoUsuarioTela != tipoUsuarioLogado) {
        this.toastr.error(
          `Você como ${tipoUsuarioLogado} não tem permissão para acessar essa página!`
        );
        this.router.navigate(['/']);
        return false;
      }
    }

    if (this.authenticatorService.autenticado()) {
      return true;
    }
    this.toastr.error('Você precisa estar logado para acessar essa página!');
    this.router.navigate(['/login']);
    return false;
  }
}
