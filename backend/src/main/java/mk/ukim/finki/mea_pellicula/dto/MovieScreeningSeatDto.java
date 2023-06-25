package mk.ukim.finki.mea_pellicula.dto;

import org.springframework.data.relational.core.sql.In;

public class MovieScreeningSeatDto {

    Long id;
    Integer seatNumber;
    Integer rowNumber;
    Float factor;
    Boolean free;

    public MovieScreeningSeatDto(Long id, Integer seatNumber, Integer rowNumber, Float factor, Boolean free) {
        this.id = id;
        this.seatNumber = seatNumber;
        this.rowNumber = rowNumber;
        this.factor = factor;
        this.free = free;
    }

    public Long getId() {
        return id;
    }

    public Integer getSeatNumber() {
        return seatNumber;
    }

    public Boolean getFree() {
        return free;
    }

    public Integer getRowNumber() {
        return rowNumber;
    }

    public Float getFactor() {
        return factor;
    }
}
