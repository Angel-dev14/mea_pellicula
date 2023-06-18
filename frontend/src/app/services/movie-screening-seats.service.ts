import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MovieScreeningSeats} from '../models/movie-screening-seats.model';

@Injectable({providedIn: 'root'})
export class MovieScreeningSeatsService {

  private readonly _path = 'api/movie-screening-seats'

  constructor(private _http: HttpClient) {

  }

  findAllMovieScreeningSeatsByMovieScreeningId(
    movieScreeningId: number
  ): Observable<MovieScreeningSeats[]> {
    return this._http.get<MovieScreeningSeats[]>(`${this._path}/${movieScreeningId}`);
  }



}
