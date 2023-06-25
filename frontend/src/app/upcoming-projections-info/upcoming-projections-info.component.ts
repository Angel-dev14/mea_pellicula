import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {filter, map, mergeMap, Subject, takeUntil} from "rxjs";
import {MovieService} from "../services/movie.service";
import {UpcomingMovieProjection} from '../models/upcoming-movie-projection.model';
import {AverageRating} from '../models/average-rating.model';

@Component({
  selector: 'upcoming-projections-info',
  templateUrl: './upcoming-projections-info.component.html',
  styleUrls: ['./upcoming-projections-info.component.css']
})
export class UpcomingProjectionsInfoComponent implements OnInit, OnDestroy {
  onDestroy$ = new Subject<void>();

  upcomingMovieProjections: UpcomingMovieProjection[] = [];
  averageRating: AverageRating | undefined;

  constructor(private route: ActivatedRoute, private movieService: MovieService,) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      takeUntil(this.onDestroy$),
      filter(params => params.has('movieId')),
      map(params => +params.get('movieId')!),
      mergeMap(id => this.movieService.getInfoForUpcomingProjections(id))
    ).subscribe({
      next: (upcomingProjections) => {
        this.upcomingMovieProjections = upcomingProjections;
      },
      error: (err) => {
        console.error(err.error.message);
      }
    });
    this.route.paramMap.pipe(
      takeUntil(this.onDestroy$),
      filter(params => params.has('movieId')),
      map(params => +params.get('movieId')!),
      mergeMap(id => this.movieService.getRatingForMovie(id))
    ).subscribe({
      next: (data) => {
        this.averageRating = data;
      },
      error: (err) => {
        console.error(err.error.message);
      }
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }
}
