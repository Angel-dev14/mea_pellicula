import {Component, Input, OnInit} from '@angular/core';
import {MovieScreeningSeatsService} from '../services/movie-screening-seats.service';
import {MovieScreeningSeat} from '../models/movie-screening-seats.model';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {BehaviorSubject, filter, groupBy, map, switchMap, tap} from 'rxjs';
import {MovieScreeningSeatsGroup} from '../models/movie-screening-seats.group';
import {SeatSelection} from '../models/seat-selection.model';
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {MovieService} from '../services/movie.service';
import {UpcomingMovieProjection} from '../models/upcoming-movie-projection.model';
import {ReservationService} from '../services/reservation.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ReservationConfirmedComponent} from '../dialogs/reservation-confirmed/reservation-confirmed.component';

@Component({
  selector: 'cinema-room-seats',
  templateUrl: './movie-screening-seats.component.html',
  styleUrls: ['./movie-screening-seats.component.css']
})
export class MovieScreeningSeatsComponent implements OnInit {

  movieScreeningSeats: MovieScreeningSeatsGroup[] = [];

  loader$ = new BehaviorSubject<boolean>(true);

  selectedSeatIds: number[] = [];

  form: UntypedFormGroup = this._initForm;

  movieProjection: UpcomingMovieProjection | undefined;

  selectedSeats: SeatSelection[] = [];

  constructor(
    private _movieScreeningSeatService: MovieScreeningSeatsService,
    private _route: ActivatedRoute,
    private _formBuilder: UntypedFormBuilder,
    private _movieService: MovieService,
    private _reservationService: ReservationService,
    private _matDialog: MatDialog,
    private _router: Router,
  ) {
  }

  ngOnInit(): void {
    this._route.paramMap.pipe(
      filter((paramMap) => paramMap.has('movieScreeningId')),
      map((paramMap) => +paramMap.get('movieScreeningId')!),
      switchMap((movieScreeningId: number) =>
        this._movieService.getUpcomingMovieProjection(movieScreeningId)
      ),
      tap((upcomingMovieProjection) => this.movieProjection = upcomingMovieProjection),
      switchMap(() =>
        this._movieScreeningSeatService.findAllMovieScreeningSeatsByMovieScreeningId(this.movieProjection!.movieScreeningId))
    ).subscribe({
      next: (movieScreeningSeats) => {
        this.movieScreeningSeats = movieScreeningSeats;
        this.loader$.next(false);
      }
    });

    this.form.get('selectedSeats')?.valueChanges.subscribe({
      next: (val) => console.log(val)
    })
  }

  onSeatSelection(event: SeatSelection) {
    console.log(event, 'event');
    if (this.selectedSeatIds.indexOf(event.seatId) !== -1) {
      this.selectedSeats = this.selectedSeats.filter(it => it.seatId != event.seatId);
      this.selectedSeatIds = this.selectedSeatIds.filter(it => it != event.seatId)
    } else {
      this.selectedSeatIds.push(event.seatId);
      this.selectedSeats.push(event);
    }
    this.form.get('selectedSeats')?.patchValue(
      this.selectedSeatIds
    );
  }

  get _initForm() {
    return this._formBuilder.group({
      selectedSeats: new UntypedFormControl()
    })
  }

  get totalPrice() {
    const totalFactor = this.selectedSeats.reduce((prev, curr) =>
      prev + curr.factor, 0);
    return this.movieProjection!.movieScreeningPrice * totalFactor;
  }

  createReservation() {
    this._reservationService.createReservation(this.selectedSeatIds)
      .subscribe({
        next: (reservationId) => {
          console.log('reservationId', reservationId);
          this._matDialog.open(
            ReservationConfirmedComponent,
            {
              width: '400px',
              data: {
                reservationId
              }
            }
          )
        }
      })
  }

}
