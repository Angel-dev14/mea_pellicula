package mk.ukim.finki.mea_pellicula.model;

import jakarta.persistence.*;

@Entity
@Table(name = "seats")
public class Seat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    Long id;

    @Column(name = "row_number")
    Integer rowNumber;

    @Column(name = "seat_number")
    Integer seatNumber;

    @Column(name = "factor")
    Float factor;

    //TODO link with cinema room
    @Column(name = "cinema_room_id")
    Long cinemaRoomId;

    public Long getId() {
        return id;
    }

    public Integer getRowNumber() {
        return rowNumber;
    }

    public Integer getSeatNumber() {
        return seatNumber;
    }

    public Float getFactor() {
        return factor;
    }

    public Long getCinemaRoomId() {
        return cinemaRoomId;
    }
}
