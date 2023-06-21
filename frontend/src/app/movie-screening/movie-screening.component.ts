import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {MovieService} from "../services/movie.service";

@Component({
  selector: 'movie-service',
  templateUrl: './movie-screening.component.html',
  styleUrls: ['./movie-screening.component.css']
})
export class MovieScreeningComponent {
  form: FormGroup;

  constructor(private movieService: MovieService, private router: Router, fb: FormBuilder) {
    this.form = fb.group({
      startDate: new FormControl(),
      basePrice: new FormControl(),
      movieId: new FormControl(),
      cinemaRoomId: new FormControl()
    });
  }

  onSubmit() {
    this.movieService.createMovieScreening(this.form.getRawValue()).subscribe({
      next: () => {
        this.router.navigate(['movies/next-month-projections']);
      },
      error: (err) => {
        console.error(err.message);
      }
    });
  }

  cancel() {
    this.router.navigate(['movies/next-month-projections']);
  }
}
