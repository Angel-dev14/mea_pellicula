import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MovieScreeningSeat} from '../../../models/movie-screening-seats.model';
import {SeatSelection} from '../../../models/seat-selection.model';

@Component({
  selector: 'seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent {

  @Input() selected = false;
  @Input() seat: MovieScreeningSeat | undefined;

  @Output() seatSelection = new EventEmitter<
    SeatSelection>();

  toggleSeatSelection() {
    if (!this.seat?.free) {
      return;
    }
    this.selected = !this.selected;
    this.seatSelection.emit(
      {
        seatId: this.seat!.id,
        rowNumber: this.seat!.rowNumber,
        seatNumber: this.seat!.seatNumber,
        factor: this.seat!.factor,
        selected: this.selected
      }
    )
  }
}
