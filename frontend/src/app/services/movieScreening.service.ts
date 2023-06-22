import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { MovieScreening } from '../models/movie-screening.model';
@Injectable({
    providedIn: 'root'
  })
  export class MovieScreeningService {
    path = 'api/movies';
    constructor(private http: HttpClient) {
    }
    createMovieScreening(movieScreening: MovieScreening,movieId:number)//:Observable<any>
    {
        console.log("called");
        const formData: FormData = new FormData();
        formData.append('startDate',movieScreening.startDate.toString());
        formData.append("basePrice",movieScreening.basePrice.toString());
        formData.append("movieId",movieId.toString());
        formData.append("cinemaRoomId", movieScreening.cinemaRoomId.toString());
        return this.http.post<any>(`${this.path}/add-movie-screening`,formData);
    }
  }

// import {HttpClient} from '@angular/common/http';
// import {Injectable} from '@angular/core';
// import {Observable} from 'rxjs';
// import {MovieScreening} from '../models/movie-screening.model';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class MovieScreeningService {
//   path = 'api/movies';
//
//   constructor(private http: HttpClient) {
//   }
//
//   createMovieScreening(movieScreening: MovieScreening)//:Observable<any>
//   {
//     console.log("called");
//     const formData: FormData = new FormData();
//     formData.append('startDate', movieScreening.startDate.toString());
//     formData.append("basePrice", movieScreening.basePrice.toString());
//     formData.append("movieId", movieScreening.movieId.toString());
//     console.log(movieScreening.movieId.toString());
//     formData.append("cinemaRoomId", movieScreening.cinemaRoomId.toString());
//     return this.http.post<any>(`${this.path}/add-movie-screening`, formData);
//   }
// }
//
