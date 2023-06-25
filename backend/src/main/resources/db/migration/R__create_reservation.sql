drop procedure if exists create_reservation;
drop function if exists create_reservation;

create or replace function create_reservation(customer_id bigint, movie_screening_seat_ids bigint[]) returns bigint
    language plpgsql
as
$$
declare
    reservation_id          bigint;
    movie_screening_seat_id bigint;
    movie_screening_price   bigint;
    total_price             double precision = 0;
BEGIN

    insert into reservations(token, date_created)
    values (gen_random_uuid(), now())
        returning id into reservation_id    ;

    raise notice 'reservation_id: %', reservation_id;

        foreach movie_screening_seat_id in array movie_screening_seat_ids
            loop

    select base_price * s.factor
    into movie_screening_price
    from movie_screening_seats mss
             join movie_screenings ms on mss.movie_screening_id = ms.id
             join seats s on mss.seat_id = s.id
    where mss.id = movie_screening_seat_id;

    insert into tickets(date_created, paid_price, reservation_id, movie_screening_seat_id)
    values (now(), movie_screening_price, reservation_id, movie_screening_seat_id);

    update movie_screening_seats set free = false where id = movie_screening_seat_id;
    total_price := total_price + movie_screening_price;
    end loop;

    insert into payments(payment_date, reservation_id, customer_id, price_paid)
    values (current_date, reservation_id, customer_id, total_price);
    return reservation_id;
END;
$$;