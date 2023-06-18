package mk.ukim.finki.mea_pellicula.api;

import mk.ukim.finki.mea_pellicula.model.Movie;
import mk.ukim.finki.mea_pellicula.model.UpcomingProjectionsView;
import mk.ukim.finki.mea_pellicula.service.MovieService;
import mk.ukim.finki.mea_pellicula.model.MovieProjectionsView;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/movies")
public class MovieController {

    private final MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping("/projections-next-month")
    List<MovieProjectionsView> getAllProjectionsForNextMonth() {
        return movieService.getAllMovieProjectionsForNextMonth();
    }

    @GetMapping("/upcoming-projection/{movieId}")
    List<UpcomingProjectionsView> getInfoForUpcomingProjection(@PathVariable Long movieId) {
        return movieService.getInfoAboutUpcomingProjectionsOfMovie(movieId);
    }
    @PostMapping("/add-movie/{movieId}")
    Movie addMovie(@PathVariable(name = "movieId") Long id,
                   @RequestParam(name="title", required = true) String title,
                   @RequestParam(name="description", required = true) String description,
                   @RequestParam(name="dateReleased", required = true) LocalDateTime dateTime,
                   @RequestParam(name="imdbLink", required = true) String imdbLink,
                   @RequestParam(name="duration", required = true) Integer duration,
                   @RequestParam(name="is3d", required = true) Boolean is3d)
    {
      return movieService.saveOrUpdateMovie(id, title,description,dateTime,imdbLink,duration,is3d);
    }
}
