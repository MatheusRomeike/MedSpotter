import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatorService {
  public definirToken(token: string) {
    localStorage.setItem('token', token);
  }

  public obterToken() {
    return localStorage.getItem('token');
  }

  private limparToken() {
    localStorage.removeItem('token');
  }

  public definirTipoUsuario(tipoUsuario: string) {
    localStorage.setItem('tipoUsuario', tipoUsuario);
  }

  public obterTipoUsuario() {
    return localStorage.getItem('tipoUsuario');
  }

  private limparTipoUsuario() {
    localStorage.removeItem('tipoUsuario');
  }

  public limparDados() {
    this.limparToken();
    this.limparTipoUsuario();
  }

  public autenticado() {
    if (
      this.obterToken() === null ||
      this.obterToken() === '' ||
      this.obterTipoUsuario() === null ||
      this.obterTipoUsuario() === ''
    ) {
      return false;
    }

    const jwt = this.obterToken() || '';

    const payload = JSON.parse(atob(jwt.split('.')[1]));

    // Get the expiration timestamp from the payload
    const exp = payload.exp;

    // Get the current time
    const now = Math.floor(Date.now() / 1000);

    // Check if the token is expired
    if (exp < now) {
      return false;
    } else {
      return true;
    }
  }
}
