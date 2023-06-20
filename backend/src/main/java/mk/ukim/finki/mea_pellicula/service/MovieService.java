package mk.ukim.finki.mea_pellicula.service;

import mk.ukim.finki.mea_pellicula.model.Movie;
import mk.ukim.finki.mea_pellicula.model.MovieProjectionsView;
import mk.ukim.finki.mea_pellicula.model.UpcomingProjectionsView;
import mk.ukim.finki.mea_pellicula.repo.MovieProjectionsRepository;
import mk.ukim.finki.mea_pellicula.repo.MovieRepository;
import mk.ukim.finki.mea_pellicula.repo.UpcomingProjectionsRepository;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class MovieService {
    private final MovieProjectionsRepository movieProjectionsRepository;
    private final UpcomingProjectionsRepository upcomingProjectionsRepository;
    private final MovieRepository movieRepository;

    public MovieService(MovieProjectionsRepository movieProjectionsRepository,
                        UpcomingProjectionsRepository upcomingProjectionsRepository,
                        MovieRepository movieRepository) {
        this.movieProjectionsRepository = movieProjectionsRepository;
        this.upcomingProjectionsRepository = upcomingProjectionsRepository;
        this.movieRepository = movieRepository;
    }

    public List<MovieProjectionsView> getAllMovieProjectionsForNextMonth() {
        return movieProjectionsRepository.findAll();
    }

    public List<UpcomingProjectionsView> getInfoAboutUpcomingProjectionsOfMovie(Long movieId) {
        return upcomingProjectionsRepository.findAllByMovieId(movieId);
    }

    public Movie saveOrUpdateMovie(String title, String description, Date dateReleased,
                                   String imdbLink, Integer duration, Boolean is3d) {
        return movieRepository.save(new Movie(title, description, dateReleased, imdbLink, duration, is3d));
    }
}
