import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {filter, map, switchMap, tap} from 'rxjs';
import {ReservationService} from '../services/reservation.service';
import {ReservationInfo} from '../models/reservation-info.model';
import {TicketService} from '../services/ticket.service';
import {TicketInfo} from '../models/ticket-info.model';

@Component({
  selector: 'app-tickets',
  templateUrl: './reservation-info.component.html',
  styleUrls: ['./reservation-info.component.css']
})
export class ReservationInfoComponent implements OnInit {

  reservationInfo: ReservationInfo | undefined;
  ticketInfos: TicketInfo[] = [];

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _reservationService: ReservationService,
    private _ticketService: TicketService,
  ) {
  }

  ngOnInit(): void {
    this._route.paramMap.pipe(
      filter((paramMap) => paramMap.has('reservationId')),
      map((paramMap) => +paramMap.get('reservationId')!),
      switchMap((reservationId) => this._reservationService.findReservationInfo(reservationId)),
      tap((reservationInfo) => this.reservationInfo = reservationInfo),
      switchMap((reservationInfo) => this._ticketService.getTicketsInfoFromReservationId(reservationInfo.reservationId))
    ).subscribe({
      next:(data) => this.ticketInfos = data
    });
  }


}
