import {Component, Input} from '@angular/core';
import {UpcomingMovieProjection} from "../models/upcoming-movie-projection.model";
import {ActivatedRoute, Router} from '@angular/router';
import {HelperService} from "../services/helper.service";

@Component({
  selector: 'upcoming-projection-card',
  templateUrl: './upcoming-projection-card.component.html',
  styleUrls: ['./upcoming-projection-card.component.css']
})
export class UpcomingProjectionCardComponent {

  @Input() upcomingMovieProjection: UpcomingMovieProjection | undefined;

  constructor(
    public helperService: HelperService,
    private _router: Router,
  ) { }

  navigateToMovieScreeningSeatSelection() {
    this._router.navigate(['movies/movie-screening-seats',
      this.upcomingMovieProjection?.movieScreeningId], {})
  }
}
