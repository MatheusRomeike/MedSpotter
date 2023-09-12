import { AuthenticatorService } from './../../../../shared/authenticator/authenticator.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private authenticatorService: AuthenticatorService
  ) {}

  @Output() redirectToRegisterEvent: EventEmitter<boolean> = new EventEmitter();

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  senhaVisivel: boolean = false;

  ngOnInit(): void {}

  login() {
    this.authenticatorService.definirTipoUsuario('medico');

    this.authenticatorService.definirToken(
      'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcwMzM3MDQ2OSwiaWF0IjoxNjkyODI5NjY5fQ.eTtSoeUUNkyORAJ-_vnutgQJx-ifRvcUjhHPHTY3N7Q'
    );

    this.router.navigate(['/']);
  }

  alternarVisibilidadeSenha() {
    this.senhaVisivel = !this.senhaVisivel;
  }

  redirectToRegister() {
    this.redirectToRegisterEvent.emit(true);
  }
}
