package mk.ukim.finki.mea_pellicula.api;

import mk.ukim.finki.mea_pellicula.model.MovieScreeningSeats;
import mk.ukim.finki.mea_pellicula.service.MovieScreeningSeatsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/movie-screening-seats")
public class MovieScreeningSeatsController {

    private final MovieScreeningSeatsService service;

    public MovieScreeningSeatsController(MovieScreeningSeatsService service) {
        this.service = service;
    }

    @GetMapping("{movieScreeningId}")
    List<MovieScreeningSeats> findAllForMovieScreeningId(
            @PathVariable("movieScreeningId") Long movieScreeningId
    ) {
        return this.service.findAllMovieScreeningSeatsForMovieScreeningId(
                movieScreeningId
        );
    }

}
