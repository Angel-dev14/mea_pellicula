import { Timestamp } from "rxjs";

export interface MovieScreening
{
    movieId: bigint,
    startDate: Date,
    basePrice: number,
    cinemaRoomId: bigint
}