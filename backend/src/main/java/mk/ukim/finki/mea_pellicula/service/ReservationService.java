package mk.ukim.finki.mea_pellicula.service;

import mk.ukim.finki.mea_pellicula.model.views.ReservationInfo;
import mk.ukim.finki.mea_pellicula.repo.ReservationInfoRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Service;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Types;
import java.util.List;

@Service
public class ReservationService {

    private final JdbcTemplate jdbcTemplate;
    private final ReservationInfoRepository reservationInfoRepository;

    public ReservationService(JdbcTemplate jdbcTemplate, ReservationInfoRepository reservationInfoRepository) {

        this.jdbcTemplate = jdbcTemplate;
        this.reservationInfoRepository = reservationInfoRepository;
    }

    public Long createReservation(List<Long> movieScreeningSeats) throws SQLException {
//        callStoredProcedure(1L, movieScreeningSeats.toArray(new Long[0]));
      return callStoredFunction(1L, movieScreeningSeats.toArray(new Long[0]));
    }

    public ReservationInfo findReservationInfo(Long reservationId) {
        return reservationInfoRepository.findReservationInfoByReservationId(reservationId);
    }

    public Long callStoredFunction(long customerId, Long[] movieScreeningSeatIds) {
        String sql = "{ ? = CALL create_reservation(?, ?) }";
        Long result = jdbcTemplate.execute((Connection connection) -> {
            CallableStatement callableStatement = connection.prepareCall(sql);
            callableStatement.registerOutParameter(1, Types.BIGINT);
            callableStatement.setLong(2, customerId);
            callableStatement.setObject(3, movieScreeningSeatIds, Types.ARRAY);
            callableStatement.execute();
            return callableStatement.getLong(1);
        });
        return result;
    }

    public void callStoredProcedure(long customerId, Long[] movieScreeningSeatIds) {
        String procedureCall = "CALL create_reservation(?, ?)";
        Object[] objects = new Object[]{customerId, movieScreeningSeatIds};
        int[] types = new int[]{Types.BIGINT, Types.ARRAY};
        jdbcTemplate.update(
                procedureCall,
                objects,
                types
        );
    }

    public void call(long customerId, List<Long> movieScreeningSeatIds) {
        SimpleJdbcCall jdbcCall = new SimpleJdbcCall(jdbcTemplate).withProcedureName("create_reservation");
        SqlParameterSource inParams = new MapSqlParameterSource()
                .addValue("customer_id", customerId, Types.BIGINT)
                .addValue("movie_screening_seat_ids", movieScreeningSeatIds, Types.ARRAY);
        jdbcCall.execute(inParams);
    }


}
