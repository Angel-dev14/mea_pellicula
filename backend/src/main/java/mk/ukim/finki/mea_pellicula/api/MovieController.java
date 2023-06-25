package mk.ukim.finki.mea_pellicula.api;

import mk.ukim.finki.mea_pellicula.model.AverageRatingView;
import mk.ukim.finki.mea_pellicula.model.Movie;
import mk.ukim.finki.mea_pellicula.model.views.UpcomingProjectionsView;
import mk.ukim.finki.mea_pellicula.service.MovieScreeningService;
import mk.ukim.finki.mea_pellicula.service.MovieService;
import mk.ukim.finki.mea_pellicula.model.views.MovieProjectionsView;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/movies")
public class MovieController {

    private final MovieService movieService;
    private final MovieScreeningService movieScreeningService;

    public MovieController(MovieService movieService, MovieScreeningService movieScreeningService) {
        this.movieService = movieService;
        this.movieScreeningService = movieScreeningService;
    }

    @GetMapping("/upcoming-projection/{movieScreeningId}")
    UpcomingProjectionsView getUpcomingProjection(@PathVariable Long movieScreeningId) {
        return movieService.getUpcomingProjection(movieScreeningId);
    }

    @GetMapping("/projections-next-month")
    List<MovieProjectionsView> getAllProjectionsForNextMonth() {
        return movieService.getAllMovieProjectionsForNextMonth();
    }

    @GetMapping("/upcoming-projections/{movieId}")
    List<UpcomingProjectionsView> getInfoForUpcomingProjection(@PathVariable Long movieId) {
        return movieService.getInfoAboutUpcomingProjectionsOfMovie(movieId);
    }

    @GetMapping("/get-average-rating/{movieId}")
    AverageRatingView getRatingForUpcomingProjection(@PathVariable Long movieId) {
        return movieService.getAllRatingsForMovieWithId(movieId).orElseThrow();
    }

    @PostMapping("/add-movie")
    Movie addMovie(@RequestParam(name = "title") String title,
                   @RequestParam(name = "description", required = false) String description,
                   @RequestParam(name = "dateReleased") LocalDate date,
                   @RequestParam(name = "imdbLink", required = false) String imdbLink,
                   @RequestParam(name = "duration") Integer duration,
                   @RequestParam(name = "is3d") Boolean is3d) {
        return movieService.saveOrUpdateMovie(title, description, date, imdbLink, duration, is3d);
    }

    @PostMapping("/add-movie-screening")
    Map<String, String> addMovieScreeningProjection(@RequestParam(name = "movieId") Long movieId,
                                                    @RequestParam(name = "startDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime startDate,
                                                    @RequestParam(name = "basePrice") Long basePrice,
                                                    @RequestParam(name = "cinemaRoomId") Long cinemaRoomId) {
        return Map.of("message", this.movieScreeningService.addMovieScreening(startDate, basePrice, movieId, cinemaRoomId));
    }
}
