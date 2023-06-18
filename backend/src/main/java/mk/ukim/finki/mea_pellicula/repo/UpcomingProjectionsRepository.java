package mk.ukim.finki.mea_pellicula.repo;

import mk.ukim.finki.mea_pellicula.model.UpcomingProjectionsView;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UpcomingProjectionsRepository extends JpaRepository<UpcomingProjectionsView, Long> {
    List<UpcomingProjectionsView> findAllByMovieId(Long movieId);
}
