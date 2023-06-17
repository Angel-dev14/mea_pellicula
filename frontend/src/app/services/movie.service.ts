import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {MovieProjection} from "../models/movie-projection.model";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  path = 'api/movies';

  constructor(private http: HttpClient) {
  }

  getMovieProjectionsForNextMonth(): Observable<MovieProjection[]> {
    return this.http.get<MovieProjection[]>(`${this.path}/projections-next-month`);
  }
}
