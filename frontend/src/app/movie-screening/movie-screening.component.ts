import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {MovieService} from "../services/movie.service";
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieScreeningService } from '../services/movieScreening.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {filter, map, mergeMap, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'movie-service',
  templateUrl: './movie-screening.component.html',
  styleUrls: ['./movie-screening.component.css']
})
export class MovieScreeningComponent implements OnInit {
export class MovieScreeningComponent {
  form: FormGroup;
  movieId!:number;
  movieService: any;
  constructor(private movieScreeningService: MovieScreeningService, private router: Router, fb: FormBuilder,private route: ActivatedRoute) {

  constructor(private movieService: MovieService, private router: Router, fb: FormBuilder) {
    this.form = fb.group({
      startDate: new FormControl(),
      basePrice: new FormControl(),
      cinemaRoomId: new FormControl()
    });
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      filter(params => params.has('movieId')),
      map(params => +params.get('movieId')!)).subscribe({next: (data)=> {this.movieId=data}})
  }

  onDestroy$(onDestroy$: any): import("rxjs").OperatorFunction<import("@angular/router").ParamMap, import("@angular/router").ParamMap> {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    this.movieService.createMovieScreening(this.form.getRawValue()).subscribe({
    console.log(this.form.getRawValue());
   this.movieScreeningService.createMovieScreening(this.form.getRawValue(),this.movieId).subscribe({
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
