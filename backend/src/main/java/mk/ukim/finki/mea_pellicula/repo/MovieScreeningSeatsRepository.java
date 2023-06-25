package mk.ukim.finki.mea_pellicula.repo;

import mk.ukim.finki.mea_pellicula.model.MovieScreeningSeat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MovieScreeningSeatsRepository
        extends JpaRepository<MovieScreeningSeat, Long> {

    List<MovieScreeningSeat> findAllByMovieScreeningId(Long movieScreeningId);

}
