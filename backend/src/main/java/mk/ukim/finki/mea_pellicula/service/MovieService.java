package mk.ukim.finki.mea_pellicula.service;

import mk.ukim.finki.mea_pellicula.model.views.MovieProjectionsView;
import mk.ukim.finki.mea_pellicula.model.views.UpcomingProjectionsView;
import mk.ukim.finki.mea_pellicula.repo.MovieProjectionsRepository;
import mk.ukim.finki.mea_pellicula.repo.UpcomingProjectionsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {
    private final MovieProjectionsRepository movieProjectionsRepository;
    private final UpcomingProjectionsRepository upcomingProjectionsRepository;

    public MovieService(MovieProjectionsRepository movieProjectionsRepository,
                        UpcomingProjectionsRepository upcomingProjectionsRepository) {
        this.movieProjectionsRepository = movieProjectionsRepository;
        this.upcomingProjectionsRepository = upcomingProjectionsRepository;
    }

    public List<MovieProjectionsView> getAllMovieProjectionsForNextMonth() {
        return movieProjectionsRepository.findAll();
    }

    public List<UpcomingProjectionsView> getInfoAboutUpcomingProjectionsOfMovie(Long movieId) {
        return upcomingProjectionsRepository.findAllByMovieId(movieId);
    }
}
