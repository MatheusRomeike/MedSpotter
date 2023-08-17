import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router) {}

  @Output() redirectToRegisterEvent: EventEmitter<boolean> = new EventEmitter();

  form = new FormGroup({
    tipoUsuario: new FormControl('1', Validators.required),
    nome: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    telefone: new FormControl('', Validators.required),
    dataNascimento: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    crm: new FormControl(''),
    senha: new FormControl('', [Validators.required, this.validarSenha]),
  });

  senhaVisivel: boolean = false;

  ngOnInit(): void {
    this.form.get('tipoUsuario')!.valueChanges.subscribe((tipoUsuario) => {
      tipoUsuario == '1'
        ? this.form.get('crm')!.setValidators(null)
        : this.form.get('crm')!.setValidators(Validators.required);
    });
  }

  validarSenha(control: any) {
    const senha = control.value;
    const temNumero = /[0-9]/.test(senha);
    const temLetra = /[a-zA-Z]/.test(senha);
    if (!temLetra)
      return {
        senhaInvalida: true,
        mensagem: 'É obrigatório ter pelo menos 1 letra.',
      };
    if (!temNumero)
      return {
        senhaInvalida: true,
        mensagem: 'É obrigatório ter pelo menos 1 número.',
      };
    if (senha.length < 8)
      return {
        senhaInvalida: true,
        mensagem: 'É obrigatório ter pelo menos 8 caracteres.',
      };
    return null;
  }

  get senha() {
    return this.form.get('senha');
  }

  alternarVisibilidadeSenha() {
    this.senhaVisivel = !this.senhaVisivel;
  }

  register() {
    this.router.navigate(['/']);
  }

  redirectToRegister() {
    this.redirectToRegisterEvent.emit(true);
  }
}
