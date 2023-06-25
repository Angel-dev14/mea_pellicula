drop view if exists upcoming_projections;
create or replace view upcoming_projections
            (token, movie_id, title, cinema_id, cinema_name, city_id, city_name, dates, movie_screening_id,
             movie_screening_price) as
SELECT gen_random_uuid() as token,
       m.id              AS movie_id,
       m.title,
       c.id              AS cinema_id,
       c.name            AS cinema_name,
       c2.id             AS city_id,
       c2.name           AS city_name,
       ms.start_date     AS dates,
       ms.id             as movie_screening_id,
       ms.base_price     as movie_screening_price
FROM movie_screenings ms
         JOIN movies m ON ms.movie_id = m.id
         JOIN cinema_rooms cr ON ms.cinema_room_id = cr.id
         JOIN cinemas c ON cr.cinema_id = c.id
         JOIN cities c2 ON c.city_id = c2.id
WHERE ms.start_date >= now();
