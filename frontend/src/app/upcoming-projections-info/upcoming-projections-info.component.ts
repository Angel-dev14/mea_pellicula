import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {filter, map, mergeMap} from "rxjs";
import {MovieService} from "../services/movie.service";
import {UpcomingMovieProjection} from "../models/upcoming-movie-projection.model";

@Component({
  selector: 'upcoming-projections-info',
  templateUrl: './upcoming-projections-info.component.html',
  styleUrls: ['./upcoming-projections-info.component.css']
})
export class UpcomingProjectionsInfoComponent implements OnInit {
  upcomingMovieProjections: UpcomingMovieProjection[] = [];

  constructor(private route: ActivatedRoute, private movieService: MovieService,) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
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
  }
}
