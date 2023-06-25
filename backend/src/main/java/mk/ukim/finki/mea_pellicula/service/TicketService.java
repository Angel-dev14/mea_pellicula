package mk.ukim.finki.mea_pellicula.service;

import mk.ukim.finki.mea_pellicula.model.TicketInfo;
import mk.ukim.finki.mea_pellicula.repo.TicketInfoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketService {

    private final TicketInfoRepository ticketInfoRepository;

    public TicketService(TicketInfoRepository ticketInfoRepository) {

        this.ticketInfoRepository = ticketInfoRepository;
    }

    public List<TicketInfo> getTicketInfoFromReservationId(Long reservationId) {
        return this.ticketInfoRepository.findByReservationId(reservationId);
    }
}
