import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dependentes',
  templateUrl: './dependentes.component.html',
  styleUrls: ['./dependentes.component.scss'],
})
export class DependentesComponent implements OnInit {
  @Input('form') form: any;
  constructor() {}

  ngOnInit() {}
}
