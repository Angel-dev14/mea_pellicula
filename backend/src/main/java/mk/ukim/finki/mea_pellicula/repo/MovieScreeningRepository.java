package mk.ukim.finki.mea_pellicula.repo;
import mk.ukim.finki.mea_pellicula.model.MovieScreening;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieScreeningRepository extends JpaRepository<MovieScreening, Long> {
}
