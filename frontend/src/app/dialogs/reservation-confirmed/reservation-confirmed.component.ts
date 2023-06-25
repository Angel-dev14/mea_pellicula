import {Component, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-reservation-confirmed',
  templateUrl: './reservation-confirmed.component.html',
  styleUrls: ['./reservation-confirmed.component.css']
})
export class ReservationConfirmedComponent {

  constructor(
    private _router: Router,
    @Inject(MAT_DIALOG_DATA) public data: {reservationId: number},
    private _dialogRef: MatDialogRef<ReservationConfirmedComponent>
  ) {}

  proceed() {
    this._dialogRef.close();
    this._router.navigate(['reservation/reservation-info', this.data.reservationId], {})
  }

}
