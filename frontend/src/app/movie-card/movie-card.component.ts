import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MovieProjection} from "../models/movie-projection.model";
import {HelperService} from "../services/helper.service";

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() movieProjection: MovieProjection | undefined;
  @Output() selectedMovie$ = new EventEmitter<bigint>();
  @Output() selectedMovieAddScreening$ = new EventEmitter<bigint>();

  constructor(public helperService: HelperService) {
  }

  showUpcomingProjection(movieId: bigint) {
    this.selectedMovie$.emit(movieId);
  }

  createAScreening(movieId: bigint) {
    this.selectedMovieAddScreening$.emit(movieId);
  }
}
