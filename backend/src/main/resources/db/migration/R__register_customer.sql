drop function if exists create_movie_screening;

drop procedure if exists create_movie_screening;
create or replace procedure create_movie_screening(_start_date timestamp without time zone,
                                                   _base_price double precision, _movie_id bigint,
                                                   _cinema_room_id bigint)
    language plpgsql
as
$$
declare
    _row RECORD;
begin
    if _start_date < now() + interval '1 day' then
        raise exception 'The new movie screening must be at least 24 hours from now!';
    end if;
    if (select count(*)
        from movie_screenings ms
        where ms.cinema_room_id = _cinema_room_id
          and _start_date between ms.start_date and ms.end_date) > 0 then
        raise exception 'The cinema room is occupied at this time!';
    end if;
    if (select count(*) from movies m where m.id = _movie_id) = 0 then
        raise exception 'There is no movie with id %', _movie_id;
    end if;
    if (select count(*) from cinema_rooms cr where cr.id = _cinema_room_id) = 0 then
        raise exception 'There is no cinema room with id %', _cinema_room_id;
    end if;
    if _base_price <= 0 then
        raise exception 'The price must be greater then 0';
    end if;
    insert into movie_screenings(start_date, is_finished, end_date, base_price, movie_id,
                                 cinema_room_id)
    values (_start_date, false, _start_date + interval '3 hours', _base_price, _movie_id,
            _cinema_room_id);
end
$$;
