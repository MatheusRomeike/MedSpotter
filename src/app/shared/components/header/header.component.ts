import { Component, OnInit } from '@angular/core';
import {
  faCalendarCheck,
  faHouse,
  faClockRotateLeft,
  faUser,
  faUserPlus,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  faHouse = faHouse;
  faCalendarCheck = faCalendarCheck;
  faClockRotateLeft = faClockRotateLeft;
  faUser = faUser;
  faUserPlus = faUserPlus;
  faRightFromBracket = faRightFromBracket;
}
