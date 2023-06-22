import {Component, OnInit} from '@angular/core';
import {MovieProjection} from "../models/movie-projection.model";
import {MovieService} from "../services/movie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'list-next-month-projections',
  templateUrl: './list-next-month-projections.component.html',
  styleUrls: ['./list-next-month-projections.component.css']
})
export class ListNextMonthProjectionsComponent implements OnInit {

  movieProjections: MovieProjection[] = [];

  constructor(private movieService: MovieService, private router: Router) {
  }

  ngOnInit(): void {
    this.movieService.getMovieProjectionsForNextMonth().subscribe({
      next: (movies) => {
        this.movieProjections = movies;
      },
      error: (err) => {
        console.error(err.error.message);
      }
    });
  }

  showUpcomingProjectionForSelectedMovie(movieId: bigint) {
    this.router.navigate(['movies/upcoming-projections-info', movieId]);
  }

  createAScreening(movieId: bigint) {
    this.router.navigate(['movies/add-movie-screening', movieId]);
  }
}
