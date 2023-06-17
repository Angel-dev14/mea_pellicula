package mk.ukim.finki.mea_pellicula.Service;

import mk.ukim.finki.mea_pellicula.model.MovieProjectionsView;
import mk.ukim.finki.mea_pellicula.repo.MovieProjectionsViewRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {
    private final MovieProjectionsViewRepository movieProjectionsRepository;


    public MovieService(MovieProjectionsViewRepository movieProjectionsRepository) {
        this.movieProjectionsRepository = movieProjectionsRepository;
    }

    public List<MovieProjectionsView> getAllMovieProjectionsForNextMonth() {
        return movieProjectionsRepository.findAll();
    }

}
