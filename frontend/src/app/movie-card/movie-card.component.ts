import {Component, Input} from '@angular/core';
import {MovieProjection} from "../models/movie-projection.model";

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() movieProjection: MovieProjection | undefined;

  capitalizeFirstLetter(title: string | undefined) {
    if (title === undefined) {
      return '';
    }
    return title?.charAt(0).toUpperCase() + title?.slice(1);
  }
}
