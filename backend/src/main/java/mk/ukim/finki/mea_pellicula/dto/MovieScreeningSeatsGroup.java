package mk.ukim.finki.mea_pellicula.dto;


import java.util.List;

public class MovieScreeningSeatsGroup {
    Integer rowNumber;
    List<MovieScreeningSeatDto> seats;

    public MovieScreeningSeatsGroup(Integer rowNumber, List<MovieScreeningSeatDto> seats) {
        this.rowNumber = rowNumber;
        this.seats = seats;
    }

    public Integer getRowNumber() {
        return rowNumber;
    }

    public List<MovieScreeningSeatDto> getSeats() {
        return seats;
    }
}
