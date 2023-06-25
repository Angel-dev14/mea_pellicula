import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MovieService} from "../services/movie.service";
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, map} from "rxjs";

@Component({
  selector: 'movie-service',
  templateUrl: './movie-screening.component.html',
  styleUrls: ['./movie-screening.component.css']
})
export class MovieScreeningComponent implements OnInit {
  form: FormGroup;
  movieId: number | undefined;
  showErrorMessage: boolean = false;
  errorMessage: string = '';

  constructor(private movieService: MovieService, private router: Router, fb: FormBuilder, private route: ActivatedRoute) {
    this.form = fb.group({
      startDate: new FormControl(),
      basePrice: new FormControl(),
      cinemaRoomId: new FormControl()
    });
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      filter(params => params.has('movieId')),
      map(params => +params.get('movieId')!)).subscribe({
      next: (data) => {
        this.movieId = data
      }
    })
  }

  onSubmit() {
    this.movieService.createMovieScreening(this.form.getRawValue(), this.movieId).subscribe({
      next: (data) => {
        if (data.message === 'Success' || data.message === 'PreparedStatementCallback; SQL [SELECT create_movie_screening(?, ?, ?, ?)]; A result was returned when none was expected.') {
          this.router.navigate(['movies/next-month-projections']);
        } else {
          this.setErrorMessage(true, data.message);
        }
      },
      error: (err) => {
        console.error(err.message);
      }
    });
  }

  cancel() {
    this.router.navigate(['movies/next-month-projections']);
  }

  setErrorMessage(bool: boolean, message: string) {
    console.log("called", bool, " message: ", message)
    this.showErrorMessage = bool;
    this.errorMessage = message;
  }
}
