package mk.ukim.finki.mea_pellicula.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "tickets_info")
public class TicketInfo {

    @Id
    Long id;

    @Column(name = "reservation_id")
    Long reservationId;

    @Column(name = "paid_price")
    Double paidPrice;

    @Column(name = "row_number")
    Long rowNumber;

    @Column(name = "seat_number")
    Long seatNumber;

    public TicketInfo() {
    }

    public TicketInfo(Long id, Long reservationId, Double paidPrice, Long rowNumber, Long seatNumber) {
        this.id = id;
        this.reservationId = reservationId;
        this.paidPrice = paidPrice;
        this.rowNumber = rowNumber;
        this.seatNumber = seatNumber;
    }

    public Long getId() {
        return id;
    }

    public Long getReservationId() {
        return reservationId;
    }

    public Double getPaidPrice() {
        return paidPrice;
    }

    public Long getRowNumber() {
        return rowNumber;
    }

    public Long getSeatNumber() {
        return seatNumber;
    }
}
