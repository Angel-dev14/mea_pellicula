package mk.ukim.finki.mea_pellicula.repo;

import mk.ukim.finki.mea_pellicula.model.TicketInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TicketInfoRepository extends JpaRepository<TicketInfo, Long> {
    
    List<TicketInfo> findByReservationId(Long reservationId);
    
}
