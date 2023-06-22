export interface UpcomingMovieProjection {
  uuid: string,
  movieId: bigint,
  title: string,
  cinemaId: bigint,
  cinemaName: string,
  cityId: bigint,
  cityName: string,
  startDate: Date,
}
