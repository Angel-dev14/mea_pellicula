drop view if exists tickets_info;
create view tickets_info(id, reservation_id, paid_price, row_number, seat_number) as
SELECT t.id,
       t.reservation_id,
       t.paid_price,
       s.row_number,
       s.seat_number
FROM tickets t
         JOIN movie_screening_seats mss ON mss.id = t.movie_screening_seat_id
         JOIN seats s ON mss.seat_id = s.id;