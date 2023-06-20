import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {MovieProjection} from "../models/movie-projection.model";
import {UpcomingMovieProjection} from "../models/upcoming-movie-projection.model";
import {Movie} from "../models/movie.model";

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

  getInfoForUpcomingProjections(movieId: number): Observable<UpcomingMovieProjection[]> {
    return this.http.get<UpcomingMovieProjection[]>(`${this.path}/upcoming-projection/${movieId}`);
  }

  addNewMovie(movie: Movie): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('title', movie.title);
    movie?.description ? formData.append('description', movie.description) : '';
    formData.append('dateReleased', movie.dateReleased.toString());
    movie?.imdbLink ? formData.append('imdbLink', movie.imdbLink) : '';
    formData.append('duration', movie.duration.toString());
    formData.append('is3d', movie.is3d.toString());
    return this.http.post<any>(`${this.path}/add-movie`, formData);
  }
}
