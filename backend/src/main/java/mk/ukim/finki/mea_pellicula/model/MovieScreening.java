//package mk.ukim.finki.mea_pellicula.model;
//
//import jakarta.persistence.*;
//
//import java.time.LocalDateTime;
//
//@Entity
//@Table(name = "movie_screenings")
//public class MovieScreening {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    Long id;
//
//    @Column(name = "start_date")
//    LocalDateTime startDate;
//
//    @Column(name = "base_price")
//    double basePrice;
//
//    @Column(name = "movie_id")
//    Long movieId;
//
//    @Column(name = "cinema_room_id")
//    Long cinemaRoomId;
//
//    public MovieScreening() {
//    }
//
//    public MovieScreening(LocalDateTime startDate, double basePrice, Long movieId, Long cinemaRoomId) {
//        this.startDate = startDate;
//        this.basePrice = basePrice;
//        this.movieId = movieId;
//        this.cinemaRoomId = cinemaRoomId;
//    }
//}
