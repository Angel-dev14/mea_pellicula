package mk.ukim.finki.mea_pellicula.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "upcoming_projections")
public class UpcomingProjectionsView {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "movie_id")
    Long movieId;

    @Column(name = "title")
    String title;

    @Column(name = "cinema_id")
    Long cinemaId;

    @Column(name = "cinema_name")
    String cinemaName;

    @Column(name = "city_id")
    Long cityId;

    @Column(name = "city_name")
    String cityName;

    @Column(name = "dates")
    LocalDateTime startDate;

    public UpcomingProjectionsView() {
    }

    public UpcomingProjectionsView(UUID id, Long movieId, String title, Long cinemaId, String cinemaName, Long cityId,
                                   String cityName, LocalDateTime startDate) {
        this.id = id;
        this.movieId = movieId;
        this.title = title;
        this.cinemaId = cinemaId;
        this.cinemaName = cinemaName;
        this.cityId = cityId;
        this.cityName = cityName;
        this.startDate = startDate;
    }

    public UUID getId() {
        return id;
    }

    public Long getMovieId() {
        return movieId;
    }

    public String getTitle() {
        return title;
    }

    public Long getCinemaId() {
        return cinemaId;
    }

    public String getCinemaName() {
        return cinemaName;
    }

    public Long getCityId() {
        return cityId;
    }

    public String getCityName() {
        return cityName;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }
}
