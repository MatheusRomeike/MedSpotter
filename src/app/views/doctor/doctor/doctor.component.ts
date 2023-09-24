import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
})
export class DoctorComponent implements OnInit {
  doctor = {
    name: 'Doutor Ricardo Lasmar',
    specialties: [
      { id: 2, description: 'Ginecogista', main: true },
      { id: 2, description: 'Reprodução Humana', main: false },
      { id: 3, description: 'Cirurgia Ginecológica', main: false },
      { id: 4, description: 'Obstetrícia', main: false },
      { id: 5, description: 'Implantes Hormonais', main: false },
    ],
    ratingAvg: 4.8,
    ratingCount: 125,
  };

  specialty: any;
  constructor() {}

  ngOnInit() {}

  getSpecialty() {
    if (this.doctor != null) {
      this.specialty = this.doctor.specialties.find(
        (x) => x.main == true
      )?.description;
      return this.specialty;
    }
  }
}
