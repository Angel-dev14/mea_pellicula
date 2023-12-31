import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {MovieProjection} from "../models/movie-projection.model";
import {UpcomingMovieProjection} from "../models/upcoming-movie-projection.model";
import {Movie} from "../models/movie.model";
import {MovieScreening} from "../models/movie-screening.model";
import {AverageRating} from '../models/average-rating.model';

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

  getRatingForMovie(movieId: number): Observable<AverageRating> {
    return this.http.get<AverageRating>(`${this.path}/get-average-rating/${movieId}`);
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

  createMovieScreening(movieScreening: MovieScreening, movieId: number | undefined) {
    const formData: FormData = new FormData();
    formData.append('startDate', movieScreening.startDate.toString());
    formData.append("basePrice", movieScreening.basePrice.toString());
    formData.append("movieId", movieId ? movieId.toString() : '');
    formData.append("cinemaRoomId", movieScreening.cinemaRoomId.toString());
    return this.http.post<any>(`${this.path}/add-movie-screening`, formData);
  }

}
