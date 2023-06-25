package mk.ukim.finki.mea_pellicula.model;

import io.micrometer.common.lang.Nullable;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name = "movies")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(name = "title")
    String title;

    @Nullable
    @Column(name = "description")
    String description;

    @Column(name = "date_released")
    LocalDate dateReleased;

    @Nullable
    @Column(name = "imdb_link")
    String imdbLink;

    @Column(name = "duration")
    Integer duration;

    @Column(name = "is_3d")
    Boolean is3d;


    public Movie() {
    }

    public Movie(String title, @Nullable String description, LocalDate dateReleased, @Nullable String imdbLink,
                 Integer duration, Boolean is3d) {
        this.title = title;
        this.description = description;
        this.dateReleased = dateReleased;
        this.imdbLink = imdbLink;
        this.duration = duration;
        this.is3d = is3d;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public LocalDate getDateReleased() {
        return dateReleased;
    }

    public String getImdbLink() {
        return imdbLink;
    }

    public Integer getDuration() {
        return duration;
    }

    public Boolean getIs3d() {
        return is3d;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setDateReleased(LocalDate dateReleased) {
        this.dateReleased = dateReleased;
    }

    public void setImdbLink(String imdbLink) {
        this.imdbLink = imdbLink;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public void setIs3d(Boolean is3d) {
        this.is3d = is3d;
    }
}
