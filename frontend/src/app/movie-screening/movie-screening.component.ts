import { Component } from '@angular/core';
import { MovieScreeningService } from '../services/movieScreening.service';
import { MovieScreening } from '../models/movie-screening.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-service',
  templateUrl: './movie-screening.component.html',
  styleUrls: ['./movie-screening.component.css']
})
export class MovieScreeningComponent  {
  form: FormGroup;
  constructor(private movieScreeningService: MovieScreeningService, private router: Router, fb: FormBuilder) {
    this.form = fb.group({
      startDate: new FormControl(),
      basePrice: new FormControl(),
      movieId: new FormControl(),
      cinemaRoomId: new FormControl()
    });
  }
  onSubmit() {
    console.log(this.form.getRawValue());
   this.movieScreeningService.createMovieScreening(this.form.getRawValue()).subscribe({
      next: () => {
        this.router.navigate(['movies/next-month-projections']);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  cancel() {
    this.router.navigate(['movies/next-month-projections']);
  }
}
