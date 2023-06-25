package mk.ukim.finki.mea_pellicula.api;

import mk.ukim.finki.mea_pellicula.model.views.ReservationInfo;
import mk.ukim.finki.mea_pellicula.service.ReservationService;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("api/reservations")
public class ReservationController {

    private final ReservationService reservationService;

    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @PostMapping("/create/{userId}")
    public Long createReservation(
            @RequestBody List<Long> movieScreeningSeatIds,
            @PathVariable Long userId
    ) throws SQLException {
        return reservationService.createReservation(movieScreeningSeatIds, userId);
    }

    @GetMapping("/{reservationId}")
    public ReservationInfo findReservationInfo(@PathVariable Long reservationId) {
        return reservationService.findReservationInfo(reservationId);
    }
}
