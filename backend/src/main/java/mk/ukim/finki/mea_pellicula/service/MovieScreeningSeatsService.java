package mk.ukim.finki.mea_pellicula.service;

import mk.ukim.finki.mea_pellicula.dto.MovieScreeningSeatDto;
import mk.ukim.finki.mea_pellicula.dto.MovieScreeningSeatsGroup;
import mk.ukim.finki.mea_pellicula.model.MovieScreeningSeat;
import mk.ukim.finki.mea_pellicula.repo.MovieScreeningSeatsRepository;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class MovieScreeningSeatsService {

    private final MovieScreeningSeatsRepository repository;

    MovieScreeningSeatsService(MovieScreeningSeatsRepository repository) {
        this.repository = repository;
    }

    public List<MovieScreeningSeatsGroup> findAllMovieScreeningSeatsForMovieScreeningId(
            Long movieScreeningSeatId
    ) {
        List<MovieScreeningSeat> movieScreeningSeats = this.repository.findAllByMovieScreeningId(movieScreeningSeatId);
        return movieScreeningSeats.stream()
                .sorted(Comparator.comparing(mss -> mss.getSeat().getSeatNumber()))
                .collect(
                        Collectors.groupingBy(
                                mss -> mss.getSeat().getRowNumber()
                        )
                ).entrySet().stream().map((entry) -> new MovieScreeningSeatsGroup(
                        entry.getKey(),
                        entry.getValue().stream().map(
                                mss -> new MovieScreeningSeatDto(
                                        mss.getId(),
                                        mss.getSeat().getSeatNumber(),
                                        mss.getSeat().getRowNumber(),
                                        mss.getSeat().getFactor(),
                                        mss.getFree()
                                )
                        ).toList()
                )).toList();
    }

}
