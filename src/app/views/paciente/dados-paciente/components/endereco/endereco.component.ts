import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss'],
})
export class EnderecoComponent implements OnInit {
  @Input('form') form: any;

  constructor() {}

  ngOnInit() {}
}
