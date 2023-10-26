import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  async registrarUsuario(usuario: any) {
    var response = await firstValueFrom(
      this.httpClient.post('http://localhost:8080/usuario/salvar', usuario)
    );
    return response;
  }

  async login(usuario: any) {
    var response = await firstValueFrom(
      this.httpClient.post('http://localhost:8080/usuario/login', usuario)
    );
    return response;
  }
}
