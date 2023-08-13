import { AfterViewInit, Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-default-page-layout',
  templateUrl: './default-page-layout.component.html',
  styleUrls: ['./default-page-layout.component.scss'],
})
export class DefaultPageLayoutComponent implements AfterViewInit {
  pageWidth = window.innerWidth;
  currentUrl = this.router.url;

  constructor(public router: Router) {}

  ngAfterViewInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.pageWidth = window.innerWidth;
  }
}
