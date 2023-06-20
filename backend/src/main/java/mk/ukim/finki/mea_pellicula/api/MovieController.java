package mk.ukim.finki.mea_pellicula.api;

import mk.ukim.finki.mea_pellicula.model.Movie;
import mk.ukim.finki.mea_pellicula.model.MovieProjectionsView;
import mk.ukim.finki.mea_pellicula.model.UpcomingProjectionsView;
import mk.ukim.finki.mea_pellicula.service.MovieService;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
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

    @PostMapping("/add-movie")
    Movie addMovie(@RequestParam(name = "title") String title,
                   @RequestParam(name = "description", required = false) String description,
                   @RequestParam(name = "dateReleased") Date dateTime,
                   @RequestParam(name = "imdbLink", required = false) String imdbLink,
                   @RequestParam(name = "duration") Integer duration,
                   @RequestParam(name = "is3d") Boolean is3d) {
        return movieService.saveOrUpdateMovie(title, description, dateTime, imdbLink, duration, is3d);
    }
}
