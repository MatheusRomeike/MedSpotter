import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  @Output() redirectToRegisterEvent: EventEmitter<boolean> = new EventEmitter();

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  senhaVisivel: boolean = false;

  ngOnInit(): void {}

  login() {
    this.router.navigate(['/']);
  }

  alternarVisibilidadeSenha() {
    this.senhaVisivel = !this.senhaVisivel;
  }

  redirectToRegister() {
    this.redirectToRegisterEvent.emit(true);
  }
}
