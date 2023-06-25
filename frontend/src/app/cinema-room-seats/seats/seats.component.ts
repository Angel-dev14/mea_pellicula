import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MovieScreeningSeat} from '../../models/movie-screening-seats.model';
import {SeatSelection} from '../../models/seat-selection.model';

@Component({
  selector: 'seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent {

  @Input() seats: MovieScreeningSeat[] = [];
  @Output() seatSelection = new EventEmitter<SeatSelection>();

  onSeatSelection(event: SeatSelection) {
    this.seatSelection.emit(event);
  }
}
