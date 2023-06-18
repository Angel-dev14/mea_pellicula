drop view if exists upcoming_projections;
create view upcoming_projections
            (id, movie_id, title, cinema_id, cinema_name, city_id, city_name, dates) as
(
select gen_random_uuid(),
       m.id    as movie_id,
       m.title,
       c.id    as cinema_id,
       c.name     cinema_name,
       c2.id   as city_id,
       c2.name as city_name,
       ms.start_date
from movie_screenings ms
         join movies m on ms.movie_id = m.id
         join cinema_rooms cr on ms.cinema_room_id = cr.id
         join cinemas c on cr.cinema_id = c.id
         join cities c2 on c.city_id = c2.id
where ms.start_date >= now()
    );
