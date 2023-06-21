package mk.ukim.finki.mea_pellicula.repo;

import mk.ukim.finki.mea_pellicula.model.UpcomingProjectionsView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UpcomingProjectionsRepository extends JpaRepository<UpcomingProjectionsView, Long> {
    List<UpcomingProjectionsView> findAllByMovieId(Long movieId);
}
