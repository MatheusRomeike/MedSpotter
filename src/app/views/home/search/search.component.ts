import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  response: any;
  doctor = {
    name: 'Doutor Ricardo Lasmar',
    specialties: [
      { id: 2, description: 'Ginecogista, ', main: true },
      { id: 2, description: 'Reprodução Humana, ', main: false },
      { id: 3, description: 'Cirurgia Ginecológica, ', main: false },
      { id: 4, description: 'Obstetrícia, ', main: false },
      { id: 5, description: 'Implantes Hormonais.', main: false },
    ],
    convenios: [
      { id: 2, description: 'Amil, ' },
      { id: 2, description: 'Bradesco, ' },
      { id: 3, description: 'Unimed.' },
    ],
    ratingAvg: 4.8,
    ratingCount: 125,
  };
  @Input('form') form: any;

  search() {
    this.response = this.doctor;
  }
}
