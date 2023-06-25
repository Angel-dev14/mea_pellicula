package mk.ukim.finki.mea_pellicula.api;

import mk.ukim.finki.mea_pellicula.model.TicketInfo;
import mk.ukim.finki.mea_pellicula.service.TicketService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/tickets")
public class TicketController {
    
    private final TicketService ticketService;


    public TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }
    
    @GetMapping("/reservation/{reservationId}")
    public List<TicketInfo> getTicketsInfoFromReservationId(
            @PathVariable Long reservationId
    ) {
        return this.ticketService.getTicketInfoFromReservationId(reservationId);
    }
}
