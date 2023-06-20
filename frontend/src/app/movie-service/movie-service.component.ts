import { Component, OnInit } from '@angular/core';
import { MovieScreeningService } from '../services/movieScreening.service';
import { MovieScreening } from '../models/movie-screening.model';

@Component({
  selector: 'app-movie-service',
  templateUrl: './movie-service.component.html',
  styleUrls: ['./movie-service.component.css']
})
export class MovieServiceComponent implements OnInit {
 constructor(private movieScreeningService: MovieScreeningService){
 }
 ngOnInit(): void {
  const temp:MovieScreening ={
  "movieId": BigInt(8),
  "startDate" : new Date("23-05-2023"),
  "basePrice": 25.3,
  "cinemaRoomId" : BigInt(25)
  }
  this.movieScreeningService.createMovieScreening(15,temp);
}
}
