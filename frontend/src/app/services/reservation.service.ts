import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ReservationInfo} from '../models/reservation-info.model';

@Injectable({providedIn: 'root'})
export class ReservationService {

  private readonly _path = 'api/reservations';

  constructor(
    private _http: HttpClient
  ) {

  }

  createReservation(movieScreeningSeatIds: number[]): Observable<number> {
    return this._http.post<number>(`${this._path}/create`, movieScreeningSeatIds)
  }

  findReservationInfo(reservationId: number): Observable<ReservationInfo> {
    return this._http.get<ReservationInfo>(`${this._path}/${reservationId}`);
  }

}
