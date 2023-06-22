package mk.ukim.finki.mea_pellicula.model;

import jakarta.persistence.*;

@Entity
@Table(name = "ratings")
public class RatingView {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column(name="rating")
    int rating;
    @Column(name = "movie_id")
    Long movieId;
    public RatingView(){}

    public RatingView(int rating, Long movieId) {
        this.rating = rating;
        this.movieId = movieId;
    }

    public Long getId() {
        return id;
    }

    public int getRating() {
        return rating;
    }

    public Long getMovieId() {
        return movieId;
    }
}
