package mk.ukim.finki.mea_pellicula.model.views;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "upcoming_projections")
public class UpcomingProjectionsView {

    @Id
    @Column(name = "token")
    private String token;

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

    @Column(name = "movie_screening_id")
    Long movieScreeningId;

    @Column(name = "movie_screening_price")
    Double movieScreeningPrice;

    public UpcomingProjectionsView() {
    }

    public UpcomingProjectionsView(String token, Long movieId, String title,
                                   Long cinemaId, String cinemaName, Long cityId,
                                   String cityName, LocalDateTime startDate,
                                   Long movieScreeningId, Double movieScreeningPrice) {
        this.token = token;
        this.movieId = movieId;
        this.title = title;
        this.cinemaId = cinemaId;
        this.cinemaName = cinemaName;
        this.cityId = cityId;
        this.cityName = cityName;
        this.startDate = startDate;
        this.movieScreeningId = movieScreeningId;
        this.movieScreeningPrice = movieScreeningPrice;
    }

    public String getToken() {
        return token;
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

    public Long getMovieScreeningId() {
        return movieScreeningId;
    }

    public Double getMovieScreeningPrice() {
        return movieScreeningPrice;
    }
}
