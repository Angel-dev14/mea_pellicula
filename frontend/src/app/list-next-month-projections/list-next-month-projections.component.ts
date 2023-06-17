import {Component, OnInit} from '@angular/core';
import {MovieProjection} from "../models/movie-projection.model";
import {MovieService} from "../services/movie.service";

@Component({
  selector: 'list-next-month-projections',
  templateUrl: './list-next-month-projections.component.html',
  styleUrls: ['./list-next-month-projections.component.css']
})
export class ListNextMonthProjectionsComponent implements OnInit {

  movieProjections: MovieProjection[] = [];

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getMovieProjectionsForNextMonth().subscribe({
      next: (movies) => {
        this.movieProjections = movies;
        console.log('movieProjections', this.movieProjections);
      },
      error: (err) => {
        console.error(err.error.message);
      }
    })
  }

}
