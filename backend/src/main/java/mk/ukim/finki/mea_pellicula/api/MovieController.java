package mk.ukim.finki.mea_pellicula.api;

import mk.ukim.finki.mea_pellicula.model.Movie;
import mk.ukim.finki.mea_pellicula.model.MovieProjectionsView;
import mk.ukim.finki.mea_pellicula.model.UpcomingProjectionsView;
import mk.ukim.finki.mea_pellicula.service.MovieScreeningService;
import mk.ukim.finki.mea_pellicula.service.MovieService;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.Month;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/movies")
public class MovieController {

    private final MovieService movieService;
    private final MovieScreeningService movieScreeningService;

    public MovieController(MovieService movieService, MovieScreeningService movieScreeningService) {
        this.movieService = movieService;
        this.movieScreeningService=movieScreeningService;
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
    @PostMapping("/add-movie-screening")
    String addMovieScreeningProjection(@RequestParam(name="movieId") Long movieId,
                                       @RequestParam(name="startDate")@DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime startDate,
                                       @RequestParam(name="basePrice") Long basePrice,
                                       @RequestParam(name="cinemaRoomId") Long cinemaRoomId)
    {

        /*LocalDateTime startDate = LocalDateTime.of(3022, Month.JULY, 29, 19, 30, 40);
        double basePrice=5.5;
        Long cinemaRoomId= Long.parseLong("4");*/
        return this.movieScreeningService.addMovieScreening(startDate,basePrice,movieId, cinemaRoomId);
    }
}
