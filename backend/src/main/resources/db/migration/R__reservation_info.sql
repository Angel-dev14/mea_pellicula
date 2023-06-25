drop view if exists reservation_info;
create or replace view reservation_info
            (customer_id, full_name, title, city, cinema, cinema_room, start_date, reservation_id, paid_price) as
SELECT c.person_id                                                AS customer_id,
       (per.first_name::text || ' '::text) || per.last_name::text AS full_name,
       m.title,
       cities.name                                                AS city,
       cine.name                                                  AS cinema,
       cr.name                                                    AS cinema_room,
       ms.start_date,
       t.reservation_id,
       p.price_paid                                               AS paid_price
FROM reservations r
         JOIN tickets t ON r.id = t.reservation_id
         JOIN movie_screening_seats mss ON t.movie_screening_seat_id = mss.id
         JOIN movie_screenings ms ON mss.movie_screening_id = ms.id
         JOIN movies m ON ms.movie_id = m.id
         JOIN cinema_rooms cr ON ms.cinema_room_id = cr.id
         JOIN cinemas cine ON cr.cinema_id = cine.id
         JOIN cities ON cine.city_id = cities.id
         JOIN payments p ON t.reservation_id = p.reservation_id
         JOIN customers c ON p.customer_id = c.person_id
         JOIN persons per ON c.person_id = per.id
         JOIN seats s ON mss.seat_id = s.id
GROUP BY c.person_id, ((per.first_name::text || ' '::text) || per.last_name::text), m.title, cities.name, cine.name,
         cr.name, ms.start_date, t.reservation_id, p.price_paid;