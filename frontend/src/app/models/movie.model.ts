export interface Movie {
  title: string,
  description: string | null,
  dateReleased: Date,
  imdbLink: string | null,
  duration: number,
  is3d: boolean
}
