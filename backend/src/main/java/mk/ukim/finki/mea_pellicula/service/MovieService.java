package mk.ukim.finki.mea_pellicula.service;

import mk.ukim.finki.mea_pellicula.model.Movie;
import mk.ukim.finki.mea_pellicula.model.views.MovieProjectionsView;
import mk.ukim.finki.mea_pellicula.model.AverageRatingView;
import mk.ukim.finki.mea_pellicula.model.views.UpcomingProjectionsView;
import mk.ukim.finki.mea_pellicula.repo.MovieProjectionsRepository;
import mk.ukim.finki.mea_pellicula.repo.AverageRatingRepository;
import mk.ukim.finki.mea_pellicula.repo.MovieRepository;
import mk.ukim.finki.mea_pellicula.repo.UpcomingProjectionsRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.UUID;
import java.util.Optional;

@Service
public class MovieService {
    private final MovieProjectionsRepository movieProjectionsRepository;
    private final UpcomingProjectionsRepository upcomingProjectionsRepository;
    private final MovieRepository movieRepository;
    private final AverageRatingRepository averageRatingRepository;

    public MovieService(MovieProjectionsRepository movieProjectionsRepository,
                        UpcomingProjectionsRepository upcomingProjectionsRepository,
                        MovieRepository movieRepository,
                        AverageRatingRepository averageRatingRepository) {
        this.movieProjectionsRepository = movieProjectionsRepository;
        this.upcomingProjectionsRepository = upcomingProjectionsRepository;
        this.movieRepository = movieRepository;
        this.averageRatingRepository = averageRatingRepository;
    }

    public UpcomingProjectionsView getUpcomingProjection(Long movieScreeningId) {
        return this.upcomingProjectionsRepository.findByMovieScreeningId(movieScreeningId);
    }

    public List<MovieProjectionsView> getAllMovieProjectionsForNextMonth() {
        return movieProjectionsRepository.findAll();
    }

    public Optional<AverageRatingView> getAllRatingsForMovieWithId(Long movieId) {
        return averageRatingRepository.findById(movieId);
    }

    public List<UpcomingProjectionsView> getInfoAboutUpcomingProjectionsOfMovie(Long movieId) {
        return upcomingProjectionsRepository.findAllByMovieId(movieId);
    }

    public Movie saveOrUpdateMovie(String title, String description, LocalDate dateReleased,
                                   String imdbLink, Integer duration, Boolean is3d) {
        return movieRepository.save(new Movie(title, description, dateReleased, imdbLink, duration, is3d));
    }
}
