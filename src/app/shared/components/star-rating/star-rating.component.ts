import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent {
  @Input()
  formControlName!: string;

  @Input()
  starRating = 0;

  @Input()
  disabled = false;
}
