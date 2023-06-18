package mk.ukim.finki.mea_pellicula.repo;

import mk.ukim.finki.mea_pellicula.model.MovieScreeningSeats;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MovieScreeningSeatsRepository
        extends JpaRepository<MovieScreeningSeats, Long> {

    List<MovieScreeningSeats> findAllByMovieScreeningId(Long movieScreeningId);

}
