import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DadosPacienteService {
  constructor(private httpClient: HttpClient) {}

  async registrarDependente(dependente: any) {
    var response = await firstValueFrom(
      this.httpClient.post(
        'http://localhost:8080/dependente/salvar',
        dependente
      )
    );
    return response;
  }

  async listar(usuarioId: any) {
    var response = await firstValueFrom(
      this.httpClient.get(
        `http://localhost:8080/dependente/listar?usuarioId=${usuarioId}`
      )
    );
    return response;
  }

  async alterarVigencia(id: any) {
    var response = await firstValueFrom(
      this.httpClient.put(
        `http://localhost:8080/dependente/alterarVigencia?id=${id}`,
        null
      )
    );
    return response;
  }

  async obterDados(usuarioId: any) {
    var response = await firstValueFrom(
      this.httpClient.get(
        `http://localhost:8080/usuario/obterDados?usuarioId=${usuarioId}`
      )
    );
    return response;
  }

  async atualizarTelefone(usuarioId: any, telefone: any) {
    var response = await firstValueFrom(
      this.httpClient.put(
        `http://localhost:8080/usuario/atualizarTelefone?usuarioId=${usuarioId}&telefone=${telefone}`,
        null
      )
    );
    return response;
  }
}
