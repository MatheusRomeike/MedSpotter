import { AuthenticatorService } from './../../../../shared/authenticator/authenticator.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private authenticatorService: AuthenticatorService,
    private loginService: LoginService,
    private toastr: ToastrService
  ) {}

  @Output() redirectToRegisterEvent: EventEmitter<boolean> = new EventEmitter();

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  senhaVisivel: boolean = false;

  ngOnInit(): void {}

  async login() {
    try {
      var usuario = this.form.value;
      var retorno: any = await this.loginService.login(usuario);
      if (retorno?.token) {
        this.toastr.success('Usuário autenticado com sucesso!', 'Sucesso');
        this.authenticatorService.definirTipoUsuario(retorno.tipo);
        this.authenticatorService.definirUsuarioId(retorno.id);
        this.authenticatorService.definirToken(retorno.token);
        this.router.navigate(['/']);
      } else this.toastr.error('Erro ao autenticar usuário!', 'Erro');
    } catch (error: any) {
      console.log(error);
      this.toastr.error(error.error, 'Erro');
    }
  }

  alternarVisibilidadeSenha() {
    this.senhaVisivel = !this.senhaVisivel;
  }

  redirectToRegister() {
    this.redirectToRegisterEvent.emit(true);
  }
}
