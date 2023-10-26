import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { AuthenticatorService } from 'src/app/shared/authenticator/authenticator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService,
    private authenticatorService: AuthenticatorService
  ) {}

  @Output() redirectToRegisterEvent: EventEmitter<boolean> = new EventEmitter();

  form = new FormGroup({
    tipo: new FormControl('1', Validators.required),
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
    this.form.get('tipo')!.valueChanges.subscribe((tipo) => {
      tipo == '1'
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

  async register() {
    try {
      var usuario = this.form.value;
      usuario.tipo =
        this.form.get('tipo')!.value == '1' ? 'paciente' : 'medico';
      var retorno: any = await this.loginService.registrarUsuario(usuario);
      if (retorno?.token) {
        this.toastr.success(
          'Usuário ' + retorno.tipo + ' registrado com sucesso!',
          'Sucesso'
        );
        this.authenticatorService.definirTipoUsuario(retorno.tipo);
        this.authenticatorService.definirUsuarioId(retorno.id);
        this.authenticatorService.definirToken(retorno.token);
        this.router.navigate(['/']);
      } else this.toastr.error('Erro ao registrar usuário!', 'Erro');
    } catch (error: any) {
      console.log(error);
      this.toastr.error(error.error, 'Erro');
    }
  }

  redirectToRegister() {
    this.redirectToRegisterEvent.emit(true);
  }
}
