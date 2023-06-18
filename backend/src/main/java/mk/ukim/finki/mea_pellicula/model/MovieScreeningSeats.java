package mk.ukim.finki.mea_pellicula.model;


import jakarta.persistence.*;

@Entity
@Table(name = "movie_screening_seats")
public
class MovieScreeningSeats {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    Long id;

    @Column(name = "free")
    Boolean free;

    //TODO link with movie screening id
    @Column(name = "movie_screening_id")
    Long movieScreeningId;

    @ManyToOne
    @JoinColumn(name = "seat_id")
    Seat seat;

    public Long getId() {
        return id;
    }

    public Boolean getFree() {
        return free;
    }

    public Long getMovieScreeningId() {
        return movieScreeningId;
    }

    public Seat getSeat() {
        return seat;
    }
}