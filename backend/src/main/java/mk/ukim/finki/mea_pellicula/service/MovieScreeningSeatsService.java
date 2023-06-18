package mk.ukim.finki.mea_pellicula.service;

import mk.ukim.finki.mea_pellicula.model.MovieScreeningSeats;
import mk.ukim.finki.mea_pellicula.repo.MovieScreeningSeatsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieScreeningSeatsService {

    private final MovieScreeningSeatsRepository repository;

    MovieScreeningSeatsService(MovieScreeningSeatsRepository repository) {
        this.repository = repository;
    }

    public List<MovieScreeningSeats> findAllMovieScreeningSeatsForMovieScreeningId(
            Long movieScreeningSeatId
    ) {
        return this.repository.findAllByMovieScreeningId(movieScreeningSeatId);
    }

}
