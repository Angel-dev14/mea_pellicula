export interface UpcomingMovieProjection {
  token: string,
  movieId: bigint,
  title: string,
  cinemaId: bigint,
  cinemaName: string,
  cityId: bigint,
  cityName: string,
  startDate: Date,
  movieScreeningId: number;
  movieScreeningPrice: number;
}
