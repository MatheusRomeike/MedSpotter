import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-root',
  templateUrl: './login-root.component.html',
  styleUrls: ['./login-root.component.scss'],
})
export class LoginRootComponent {
  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/']);
  }
}
