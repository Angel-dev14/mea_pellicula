package mk.ukim.finki.mea_pellicula.model.views;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.LocalDate;

@Entity
@Table(name = "reservation_info")
public class ReservationInfo {

    @Id
    @Column(name = "reservation_id")
    Long reservationId;

    @Column(name = "full_name")
    String customerFullName;

    @Column(name = "city")
    String city;

    @Column(name = "title")
    String movieTitle;

    @Column(name = "cinema")
    String cinema;

    @Column(name = "cinema_room")
    String cinemaRoom;

    @Column(name = "start_date")
    LocalDate startDate;

    @Column(name = "paid_price")
    Long paidPrice;

    public ReservationInfo() {
    }

    public ReservationInfo(Long reservationId, String customerFullName, String city, String movieTitle, String cinema, String cinemaRoom, LocalDate startDate, Long paidPrice) {
        this.reservationId = reservationId;
        this.customerFullName = customerFullName;
        this.city = city;
        this.movieTitle = movieTitle;
        this.cinema = cinema;
        this.cinemaRoom = cinemaRoom;
        this.startDate = startDate;
        this.paidPrice = paidPrice;
    }

    public Long getReservationId() {
        return reservationId;
    }

    public String getCustomerFullName() {
        return customerFullName;
    }

    public String getCity() {
        return city;
    }

    public String getMovieTitle() {
        return movieTitle;
    }

    public String getCinema() {
        return cinema;
    }

    public String getCinemaRoom() {
        return cinemaRoom;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public Long getPaidPrice() {
        return paidPrice;
    }
}
