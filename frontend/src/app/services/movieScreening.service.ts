import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, catchError} from 'rxjs';
import { MovieScreening } from '../models/movie-screening.model';
@Injectable({
    providedIn: 'root'
  })
  export class MovieScreeningService {
    path = 'api/movie-screening';
  
    constructor(private http: HttpClient) {
    }
    createMovieScreening(movieId: number,movieScreening: MovieScreening):void
    {
        console.log("called");
        const url=`${this.path}/add-movie-screening/${movieId}`;
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              Authorization: 'my-auth-token'
            })
          };
        this.http.post(url,movieScreening, httpOptions)
        .pipe(
            
        )
    }
  }
  