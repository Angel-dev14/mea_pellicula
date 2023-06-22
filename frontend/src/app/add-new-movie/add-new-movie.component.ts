import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {MovieService} from "../services/movie.service";

@Component({
  selector: 'add-new-movie',
  templateUrl: './add-new-movie.component.html',
  styleUrls: ['./add-new-movie.component.css']
})
export class AddNewMovieComponent {
  form: FormGroup;

  constructor(private movieService: MovieService, private router: Router, fb: FormBuilder) {
    this.form = fb.group({
      title: new FormControl(),
      description: new FormControl(),
      dateReleased: new FormControl(),
      imdbLink: new FormControl(),
      duration: new FormControl(),
      is3d: new FormControl(false)
    });
  }

  onSubmit() {
    this.movieService.addNewMovie(this.form.getRawValue()).subscribe({
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
