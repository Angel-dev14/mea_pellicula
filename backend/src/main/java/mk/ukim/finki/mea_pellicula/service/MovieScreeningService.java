package mk.ukim.finki.mea_pellicula.service;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class MovieScreeningService {
    private final JdbcTemplate jdbcTemplate;

    public MovieScreeningService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public String addMovieScreening(LocalDateTime startDate, double basePrice, Long movieId, Long cinemaRoomId) {
        String procedureCall = "SELECT create_movie_screening(?, ?, ?, ?)";
        try {
            jdbcTemplate.update(procedureCall, startDate, basePrice, movieId, cinemaRoomId);
            return "Adding successfull";
        } catch (Exception e) {
            return e.getMessage();
        }
    }
}