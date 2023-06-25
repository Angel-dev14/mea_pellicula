import {MovieScreeningSeat} from './movie-screening-seats.model';

export interface MovieScreeningSeatsGroup {
  rowNumber: number;
  seats: MovieScreeningSeat[];
}
