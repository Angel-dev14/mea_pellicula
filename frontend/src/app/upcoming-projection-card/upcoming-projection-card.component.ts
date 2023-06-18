import {Component, Input} from '@angular/core';
import {UpcomingMovieProjection} from "../models/upcoming-movie-projection.model";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'upcoming-projection-card',
  templateUrl: './upcoming-projection-card.component.html',
  styleUrls: ['./upcoming-projection-card.component.css']
})
export class UpcomingProjectionCardComponent {

  @Input() upcomingMovieProjection: UpcomingMovieProjection | undefined;

  constructor(
    private _router: Router,
  ) {}

  capitalizeFirstLetter(title: string | undefined) {
    if (title === undefined) {
      return '';
    }
    return title.charAt(0).toUpperCase() + title.slice(1);
  }

  navigateToMovieScreeningSeatSelection() {
    this._router.navigate(['movies/movie-screening-seats',
      this.upcomingMovieProjection?.movieScreeningId], {})
  }
}
