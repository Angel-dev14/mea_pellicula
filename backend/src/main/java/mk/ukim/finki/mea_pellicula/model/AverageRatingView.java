package mk.ukim.finki.mea_pellicula.model;

import jakarta.persistence.*;

@Entity
@Table(name = "average_rating")
public class AverageRatingView {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "movie_id")
    Long Id;

    @Column(name = "title")
    String title;

    @Column(name = "average_rating")
    Double averageRating;

    @Column(name = "number_of_ratings")
    Integer numberOfRatings;

    public AverageRatingView() {
    }

    public AverageRatingView(Long id, String title, Double averageRating, Integer numberOfRatings) {
        Id = id;
        this.title = title;
        this.averageRating = averageRating;
        this.numberOfRatings = numberOfRatings;
    }

    public Long getId() {
        return Id;
    }

    public String getTitle() {
        return title;
    }

    public Double getAverageRating() {
        return averageRating;
    }

    public Integer getNumberOfRatings() {
        return numberOfRatings;
    }
}
