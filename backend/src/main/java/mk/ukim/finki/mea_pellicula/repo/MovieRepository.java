package mk.ukim.finki.mea_pellicula.repo;

import mk.ukim.finki.mea_pellicula.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Long> { }
