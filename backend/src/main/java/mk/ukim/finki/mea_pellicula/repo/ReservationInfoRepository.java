package mk.ukim.finki.mea_pellicula.repo;

import mk.ukim.finki.mea_pellicula.model.views.ReservationInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationInfoRepository extends JpaRepository<ReservationInfo, Long> {

    public ReservationInfo findReservationInfoByReservationId(Long reservationId);

}
