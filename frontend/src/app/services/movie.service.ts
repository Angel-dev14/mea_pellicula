import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {MovieProjection} from "../models/movie-projection.model";
import {UpcomingMovieProjection} from "../models/upcoming-movie-projection.model";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  path = 'api/movies';

  constructor(private http: HttpClient) {
  }

  getUpcomingMovieProjection(movieScreeningId: number): Observable<UpcomingMovieProjection> {
    return this.http.get<UpcomingMovieProjection>(`${this.path}/upcoming-projection/${movieScreeningId}`)
  }

  getMovieProjectionsForNextMonth(): Observable<MovieProjection[]> {
    return this.http.get<MovieProjection[]>(`${this.path}/projections-next-month`);
  }

  getInfoForUpcomingProjections(movieId: number): Observable<UpcomingMovieProjection[]> {
    return this.http.get<UpcomingMovieProjection[]>(`${this.path}/upcoming-projections/${movieId}`);
  }
}
