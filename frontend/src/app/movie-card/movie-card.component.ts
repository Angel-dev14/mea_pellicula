import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MovieProjection} from "../models/movie-projection.model";

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() movieProjection: MovieProjection | undefined;
  @Output() selectedMovie$ = new EventEmitter<bigint>();

  showUpcomingProjection(movieId: bigint) {
    this.selectedMovie$.emit(movieId);
  }

  capitalizeFirstLetter(title: string | undefined) {
    if (title === undefined) {
      return '';
    }
    return title.charAt(0).toUpperCase() + title.slice(1);
  }
}
