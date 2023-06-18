import {Component, Input, OnInit} from '@angular/core';
import {MovieScreeningSeatsService} from '../services/movie-screening-seats.service';
import {MovieScreeningSeats} from '../models/movie-screening-seats.model';
import {ActivatedRoute} from '@angular/router';
import {filter, groupBy, map, switchMap, tap} from 'rxjs';
import {Seat} from '../models/seat.model';

@Component({
  selector: 'cinema-room-seats',
  templateUrl: './movie-screening-seats.component.html',
  styleUrls: ['./movie-screening-seats.component.css']
})
export class MovieScreeningSeatsComponent implements OnInit {

  movieScreeningSeats: MovieScreeningSeats[] = [];
  groupedSeats: { [key: number]: Seat[] } | undefined;

  constructor(
    private _movieScreeningSeatService: MovieScreeningSeatsService,
    private _route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this._route.paramMap.pipe(
      filter((paramMap) => paramMap.has('movieScreeningId')),
      map((paramMap) => +paramMap.get('movieScreeningId')!),
      switchMap((movieScreeningId) => this._movieScreeningSeatService.findAllMovieScreeningSeatsByMovieScreeningId(movieScreeningId)),
      tap((response) => console.log(response)),
    ).subscribe({
      next: (movieScreeningSeats) => {
        //TODO
        // this.groupedSeats = movieScreeningSeats.reduce((acc, movieScreeningSeat) => {
        //   const {seat} = movieScreeningSeat;
        //   const rowNumber = seat.rowNumber;
        //   const group = acc[rowNumber] ?? [];
        //   group.push(movieScreeningSeat.seat);
        //   return acc;
        // }, {} as { [key: number]: Seat[] });
      }
    });
  }

}
