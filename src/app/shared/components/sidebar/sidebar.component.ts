import { AuthenticatorService } from './../../authenticator/authenticator.service';
import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import {
  faCalendarCheck,
  faHouse,
  faClockRotateLeft,
  faUser,
  faUserPlus,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements AfterViewInit {
  faHouse = faHouse;
  faCalendarCheck = faCalendarCheck;
  faClockRotateLeft = faClockRotateLeft;
  faUser = faUser;
  faUserPlus = faUserPlus;
  faRightFromBracket = faRightFromBracket;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private authenticatorService: AuthenticatorService
  ) {}
  tipoUsuario: string = this.authenticatorService.obterTipoUsuario() ?? '';

  ngAfterViewInit(): void {
    this.activeItem();
  }

  activeItem() {
    const activeUrl = window.location.pathname;
    const links = this.elementRef.nativeElement.querySelectorAll('a');

    links.forEach((link: HTMLAnchorElement) => {
      const href = link.getAttribute('href');

      if (href == activeUrl) {
        this.renderer.addClass(link, 'active');
      }
    });
  }
}
