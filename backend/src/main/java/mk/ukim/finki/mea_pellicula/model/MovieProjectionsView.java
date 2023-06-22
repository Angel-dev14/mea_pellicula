package mk.ukim.finki.mea_pellicula.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "list_projections_next_month")
public class MovieProjectionsView {
    @Id
    @Column(name = "movie_id")
    Long movieId;

    @Column(name = "title")
    String title;

    @Column(name = "city")
    String city;

    @Column(name = "cinema_name")
    String cinemaName;

    @Column(name = "cinema_room")
    String cinemaRoom;

    @Column(name = "start_date")
    LocalDateTime startDate;

    public MovieProjectionsView() {
    }

    public MovieProjectionsView(Long movieId, String title, String city, String cinemaName, String cinemaRoom,
                                LocalDateTime startDate) {
        this.movieId = movieId;
        this.title = title;
        this.city = city;
        this.cinemaName = cinemaName;
        this.cinemaRoom = cinemaRoom;
        this.startDate = startDate;
    }

    public Long getMovieId() {
        return movieId;
    }

    public String getTitle() {
        return title;
    }

    public String getCity() {
        return city;
    }

    public String getCinemaName() {
        return cinemaName;
    }

    public String getCinemaRoom() {
        return cinemaRoom;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }
}
