package mk.ukim.finki.mea_pellicula.repo;

import mk.ukim.finki.mea_pellicula.model.RatingView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRatingRepository extends JpaRepository<RatingView, Long> {

}
