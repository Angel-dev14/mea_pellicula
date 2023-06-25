import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MovieScreeningSeat} from '../models/movie-screening-seats.model';
import {MovieScreeningSeatsGroup} from '../models/movie-screening-seats.group';

@Injectable({providedIn: 'root'})
export class MovieScreeningSeatsService {

  private readonly _path = 'api/movie-screening-seats'

  constructor(private _http: HttpClient) {

  }

  findAllMovieScreeningSeatsByMovieScreeningId(
    movieScreeningId: number
  ): Observable<MovieScreeningSeatsGroup[]> {
    return this._http.get<MovieScreeningSeatsGroup[]>(`${this._path}/${movieScreeningId}`);
  }



}
