import {Component, Input} from '@angular/core';
import {UpcomingMovieProjection} from "../models/upcoming-movie-projection.model";

@Component({
  selector: 'upcoming-projection-card',
  templateUrl: './upcoming-projection-card.component.html',
  styleUrls: ['./upcoming-projection-card.component.css']
})
export class UpcomingProjectionCardComponent {
  @Input() upcomingMovieProjection: UpcomingMovieProjection | undefined;

  capitalizeFirstLetter(title: string | undefined) {
    if (title === undefined) {
      return '';
    }
    return title.charAt(0).toUpperCase() + title.slice(1);
  }
}
