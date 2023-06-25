import {Component, OnInit} from '@angular/core';
import {MovieProjection} from "../models/movie-projection.model";
import {MovieService} from "../services/movie.service";
import {Router} from "@angular/router";
import {User} from "../models/user.model";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'list-next-month-projections',
  templateUrl: './list-next-month-projections.component.html',
  styleUrls: ['./list-next-month-projections.component.css']
})
export class ListNextMonthProjectionsComponent implements OnInit {

  showAddMovieScreening: boolean | undefined;
  user: User | undefined;
  movieProjections: MovieProjection[] = [];

  constructor(private movieService: MovieService, private router: Router, private authService: AuthService) {
    this.authService.userEmitter.subscribe(user => {
      this.user = user as User;
    });

    if (localStorage.getItem('currentUser')) {
      this.user = JSON.parse(localStorage.getItem('currentUser')!!);
      this.showAddMovieScreening = this.user?.email === 'admin@gmail.com';
    }
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
