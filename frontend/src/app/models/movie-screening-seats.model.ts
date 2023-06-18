import {Seat} from './seat.model';

export interface MovieScreeningSeats {
  id: number;
  free: boolean;
  seat: Seat;
}
