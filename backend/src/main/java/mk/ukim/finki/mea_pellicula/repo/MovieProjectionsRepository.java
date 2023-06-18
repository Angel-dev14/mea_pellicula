package mk.ukim.finki.mea_pellicula.repo;

import mk.ukim.finki.mea_pellicula.model.MovieProjectionsView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieProjectionsRepository extends JpaRepository<MovieProjectionsView, Long> { }
