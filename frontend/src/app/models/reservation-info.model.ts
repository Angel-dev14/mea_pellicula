export interface ReservationInfo {
  reservationId: number;
  customerFullName: string;
  city: string;
  movieTitle: string;
  cinema: string;
  cinemaRoom: string;
  startDate: Date;
  paidPrice: number;
}
