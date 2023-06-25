import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TicketInfo} from '../models/ticket-info.model';

@Injectable({providedIn: 'root'})
export class TicketService {

  private readonly _path = 'api/tickets';

  constructor(
    private _http: HttpClient
  ) {

  }

  getTicketsInfoFromReservationId(reservationId: number): Observable<TicketInfo[]> {
    return this._http.get<TicketInfo[]>(`${this._path}/reservation/${reservationId}`);
  }

}
